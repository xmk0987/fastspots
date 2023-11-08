// Fetching user, calling server where api calls are done
export const fetchUser = async (baseURL) => {
    try {
        const userApiData = await fetch(`${baseURL}/fetchUser` ,{
            credentials: 'include',
        });
        if (!userApiData.ok) {
            throw new Error(`Error fetching user! Status: ${userApiData.status}`)
        }
        const userData = await userApiData.json();
        return userData;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

// Fetching liked songs, calling server where api calls are done
export const fetchLiked = async (baseURL) => {
    try{
        const likedTracksApiData = await fetch(`${baseURL}/fetchLiked/50` ,{
            credentials: 'include',
        });
        if (!likedTracksApiData.ok) {
            throw new Error(`Error fetching liked! Status: ${likedTracksApiData.status}`);
        }
        const likedData = await likedTracksApiData.json();
        return likedData;
    }catch (error){
        console.error("Error fetching liked:", error);
        return null;
    }
};

// Fetching playlists, calling server where api calls are done
export const fetchPlaylists = async (baseURL) => {
    try {
        const playlistApiData = await fetch(`${baseURL}/fetchPlaylists`, {
            credentials: 'include'
        });
        if (!playlistApiData.ok) {
            throw new Error(`Error fetching playlists! Status: ${playlistApiData.status}`);
        }
        const playlistData = await playlistApiData.json();
        return playlistData;
    } catch (error) {
        console.error("Error fetching playlists", error);
        return null;
    }
};

// Fetching playlists tracks, calling server where api calls are done
export const fetchPlaylistTracks = async (playlistId, baseURL, newTracksAdded=false) => {
    try{
        const playlistTrackApiData = await fetch(`${baseURL}/fetchPlaylistTracks/${playlistId}/${newTracksAdded}`,{
            credentials: 'include'
        });
        if(!playlistTrackApiData.ok){
            throw new Error(`Error fetching playlist tracks! Status: ${playlistTrackApiData.status}`);
        }
        const playlistTrackData = await playlistTrackApiData.json();
        return playlistTrackData;
    }catch(error){
        console.error("Error fetching playlist tracks", error);
        return null;
    }   
}
