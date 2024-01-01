import {Platform} from 'react-native';

export const CihApiKeys = {
  YOUTUBE_API_KEY: 'AIzaSyCU6n82YBGi7Q3cFPScwqUtPI4q3-oxDXc',
  youtubeDataQueryKey: {
    search: 'youtube-data-api/search',
  },
  youtubeDataApiUrl: {
    search: 'https://www.googleapis.com/app/v3/videos',
    playListItems: 'https://youtube.googleapis.com/app/v3/playlistItems',
    channel: 'https://youtube.googleapis.com/app/v3/channels',
  },
  apiBaseUrl:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:8080/api'
      : 'http://localhost:8080/api',
  apiQueryKey: {
    saveFetchVideosByChannel: '/youtube-data/save-videos-by-channel',
    saveFetchVideosBySearch: '/youtube-data/save-videos-by-search',
    saveFetchVideosByPlaylistId: '/youtube-data/save-videos-by-playlist',
    saveFetchAllVideosByPlaylistId: '/youtube-data/save-all-videos-by-playlist',
    updateShortsByPlaylistId: '/youtube-data/update-shorts-by-playlist',
    mainPastor: '/app/main-pastor',
    mainCeleb: '/app/main-celeb',
    pastor: '/app/pastor',
    celeb: '/app/celeb',
    sermon: '/app/sermon',
    mercy: '/app/mercy',
    ccm: '/app/ccm',
    faith: '/app/faith',
  },
  apiFetchUrl: {
    mainPastor: '/app/main-pastor',
    mainCeleb: '/app/main-celeb',
    pastor: '/app/pastor',
    celeb: '/app/celeb',
    sermon: '/app/sermon',
    mercy: '/app/mercy',
    ccm: '/app/ccm',
    faith: '/app/faith',
  },
  thumnailDefault: {
    width: 120,
    height: 90,
  },
  thumnailMedium: {
    width: 320,
    height: 180,
  },
  thumnailHigh: {
    width: 480,
    height: 360,
  },
};
