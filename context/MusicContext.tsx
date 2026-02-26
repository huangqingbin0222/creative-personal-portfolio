import React, { createContext, useState, useRef, ReactNode } from 'react';

// 歌单
const songs = [
  { name: '盲盒01', path: '/mp3/盲盒01.mp3' },
  { name: '盲盒02', path: '/mp3/盲盒02.mp3' },
  { name: '盲盒03', path: '/mp3/盲盒03.mp3' },
  { name: '盲盒04', path: '/mp3/盲盒04.mp3' },
  { name: '盲盒05', path: '/mp3/盲盒05.mp3' },
  { name: '盲盒06', path: '/mp3/盲盒06.mp3' },
  { name: '盲盒07', path: '/mp3/盲盒07.mp3' },
  { name: '盲盒08', path: '/mp3/盲盒08.mp3' },
  { name: '盲盒09', path: '/mp3/盲盒09.MP3' },
  { name: '盲盒10', path: '/mp3/盲盒10.MP3' }
];

interface MusicContextType {
  isPlaying: boolean;
  currentSongIndex: number;
  currentSongName: string;
  currentTime: number;
  duration: number;
  songs: typeof songs;
  togglePlay: () => void;
  playSong: (songName: string) => void;
  playPrevious: () => void;
  playNext: () => void;
}

// 创建 Context
export const MusicContext = createContext<MusicContextType | undefined>(undefined);

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 当前歌曲名称
  const currentSongName = songs[currentSongIndex].name;

  // 初始化音频元素
  const initAudio = (songPath: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.remove();
    }

    const audio = new Audio(songPath);
    audioRef.current = audio;

    // 监听音频事件
    audio.addEventListener('timeupdate', () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    });

    audio.addEventListener('loadedmetadata', () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    });

    audio.addEventListener('ended', () => {
      // 自动播放下一首（随机）
      playNext();
    });

    return audio;
  };

  // 播放/暂停控制
  const togglePlay = () => {
    if (!audioRef.current) {
      // 创建音频元素
      const audio = initAudio(songs[currentSongIndex].path);
      audio.play();
      setIsPlaying(true);
    } else {
      // 切换播放/暂停状态
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 播放指定歌曲
  const playSong = (songName: string) => {
    // 找到歌曲索引
    const songIndex = songs.findIndex(song => song.name === songName);
    if (songIndex === -1) return;

    // 如果点击的是当前正在播放的歌曲，则暂停播放
    if (songIndex === currentSongIndex && isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    // 更新当前歌曲索引
    setCurrentSongIndex(songIndex);
    setCurrentTime(0);
    setDuration(0);

    // 初始化并播放音频
    const audio = initAudio(songs[songIndex].path);
    audio.play();
    setIsPlaying(true);
  };

  // 播放上一首（顺序）
  const playPrevious = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    setCurrentTime(0);
    setDuration(0);

    // 初始化并播放音频
    const audio = initAudio(songs[newIndex].path);
    audio.play();
    setIsPlaying(true);
  };

  // 播放下一首（随机）
  const playNext = () => {
    // 生成随机索引，确保不是当前歌曲
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex && songs.length > 1);

    setCurrentSongIndex(randomIndex);
    setCurrentTime(0);
    setDuration(0);

    // 初始化并播放音频
    const audio = initAudio(songs[randomIndex].path);
    audio.play();
    setIsPlaying(true);
  };

  const value = {
    isPlaying,
    currentSongIndex,
    currentSongName,
    currentTime,
    duration,
    songs,
    togglePlay,
    playSong,
    playPrevious,
    playNext
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};
