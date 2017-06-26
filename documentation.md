# Registered methods for the Connector
### function `getAlbums ( params? : Object )`
> * **Method**: get 
> * **Path**: /albums 
> * **Description**: [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)  
> * **Parameters**: 
>   * *ids:* A comma-separated list of IDs
>      * required: true
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
### function `getAlbumsById ( params? : Object )`
> * **Method**: get 
> * **Path**: /albums/{id} 
> * **Description**: [Get an Album](https://developer.spotify.com/web-api/get-album/)  
> * **Parameters**: 
>   * *id:* The Spotify ID for the album
>      * required: true
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
### function `getAlbumsTracksById ( params? : Object )`
> * **Method**: get 
> * **Path**: /albums/{id}/tracks 
> * **Description**: [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)  
> * **Parameters**: 
>   * *id:* The Spotify ID for the album
>      * required: true
>      * type: string
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
### function `getArtists ( params? : Object )`
> * **Method**: get 
> * **Path**: /artists 
> * **Description**: [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)  
> * **Parameters**: 
>   * *ids:* A comma-separated list of IDs
>      * required: true
>      * type: string
### function `getArtistsById ( params? : Object )`
> * **Method**: get 
> * **Path**: /artists/{id} 
> * **Description**: [Get an Artist](https://developer.spotify.com/web-api/get-artist/)  
> * **Parameters**: 
>   * *id:* The Spotify ID for the artist
>      * required: true
>      * type: string
### function `getArtistsAlbumsById ( params? : Object )`
> * **Method**: get 
> * **Path**: /artists/{id}/albums 
> * **Description**: [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)  
> * **Parameters**: 
>   * *id:* The Spotify ID for the artist
>      * required: true
>      * type: string
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *album_type:* Filter by album types
>      * required: false
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
### function `getArtistsRelatedArtistsById ( params? : Object )`
> * **Method**: get 
> * **Path**: /artists/{id}/related-artists 
> * **Description**: [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)  
> * **Parameters**: 
>   * *id:* The Spotify ID for the artist
>      * required: true
>      * type: string
### function `getArtistsTopTracksById ( params? : Object )`
> * **Method**: get 
> * **Path**: /artists/{id}/top-tracks 
> * **Description**: [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)  
> * **Parameters**: 
>   * *id:* The Spotify ID for the artist
>      * required: true
>      * type: string
>   * *country:* The country (an ISO 3166-1 alpha-2 country code)
>      * required: true
>      * type: string
### function `getBrowseCategories ( params? : Object )`
> * **Method**: get 
> * **Path**: /browse/categories 
> * **Description**: [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)  
> * **Parameters**: 
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *country:* The country (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *locale:* The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". 
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getBrowseCategoriesByCategoryId ( params? : Object )`
> * **Method**: get 
> * **Path**: /browse/categories/{category_id} 
> * **Description**: [Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)  
> * **Parameters**: 
>   * *category_id:* The Spotify ID of the category you wish to fetch.
>      * required: true
>      * type: string
>   * *country:* The country (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *locale:* The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". 
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getBrowseCategoriesPlaylistsByCategoryId ( params? : Object )`
> * **Method**: get 
> * **Path**: /browse/categories/{category_id}/playlists 
> * **Description**: [Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)  
> * **Parameters**: 
>   * *category_id:* The Spotify ID of the category you wish to fetch.
>      * required: true
>      * type: string
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *country:* The country (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getBrowseFeaturedPlaylists ( params? : Object )`
> * **Method**: get 
> * **Path**: /browse/featured-playlists 
> * **Description**: [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)  
> * **Parameters**: 
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *country:* The country (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *locale:* The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". 
>      * required: false
>      * type: string
>   * *timestamp:* A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM. 
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getBrowseNewReleases ( params? : Object )`
> * **Method**: get 
> * **Path**: /browse/new-releases 
> * **Description**: [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)  
> * **Parameters**: 
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *country:* The country (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getMe ( params? : Object )`
> * **Method**: get 
> * **Path**: /me 
> * **Description**: [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)  
> * **Parameters**:  
### function `deleteMeFollowing ( params? : Object )`
> * **Method**: delete 
> * **Path**: /me/following 
> * **Description**: [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)  
> * **Parameters**: 
>   * *type:* The type to unfollow.
>      * required: true
>      * type: string
>   * *ids:* A comma-separated list of the artists or users ids
>      * required: true
>      * type: string
### function `getMeFollowing ( params? : Object )`
> * **Method**: get 
> * **Path**: /me/following 
> * **Description**: [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)  
> * **Parameters**: 
>   * *type:* The ID type, currently only artist is supported.
>      * required: true
>      * type: string
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *after:* The last artist ID retrieved from the previous request.
>      * required: false
>      * type: string
### function `putMeFollowing ( params? : Object )`
> * **Method**: put 
> * **Path**: /me/following 
> * **Description**: [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)  
> * **Parameters**: 
>   * *type:* The type to follow.
>      * required: true
>      * type: string
>   * *ids:* A comma-separated list of the artists or users ids
>      * required: true
>      * type: string
### function `getMeFollowingContains ( params? : Object )`
> * **Method**: get 
> * **Path**: /me/following/contains 
> * **Description**: [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)  
> * **Parameters**: 
>   * *type:* The type to follow.
>      * required: true
>      * type: string
>   * *ids:* A comma-separated string of the artists or users ids.
>      * required: true
>      * type: string
### function `deleteMeTracks ( params? : Object )`
> * **Method**: delete 
> * **Path**: /me/tracks 
> * **Description**: [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)  
> * **Parameters**: 
>   * *ids:* A comma-separated list of IDs
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getMeTracks ( params? : Object )`
> * **Method**: get 
> * **Path**: /me/tracks 
> * **Description**: [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)  
> * **Parameters**: 
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `putMeTracks ( params? : Object )`
> * **Method**: put 
> * **Path**: /me/tracks 
> * **Description**: [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)  
> * **Parameters**: 
>   * *ids:* A comma-separated list of IDs
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `getMeTracksContains ( params? : Object )`
> * **Method**: get 
> * **Path**: /me/tracks/contains 
> * **Description**: [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)  
> * **Parameters**: 
>   * *ids:* A comma-separated list of IDs
>      * required: true
>      * type: string
### function `getSearch ( params? : Object )`
> * **Method**: get 
> * **Path**: /search 
> * **Description**: [Search for an Item](https://developer.spotify.com/web-api/search-item/)  
> * **Parameters**: 
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *q:* The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
>      * required: true
>      * type: string
>   * *type:* A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
>      * required: true
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.
>      * required: false
>      * type: string
### function `getTracks ( params? : Object )`
> * **Method**: get 
> * **Path**: /tracks 
> * **Description**: [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)  
> * **Parameters**: 
>   * *ids:* A comma-separated list of IDs
>      * required: true
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
### function `getTracksById ( params? : Object )`
> * **Method**: get 
> * **Path**: /tracks/{id} 
> * **Description**: [Get a Track](https://developer.spotify.com/web-api/get-track/)  
> * **Parameters**: 
>   * *id:* 
>      * required: true
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
### function `getUsersByUserId ( params? : Object )`
> * **Method**: get 
> * **Path**: /users/{user_id} 
> * **Description**: [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
### function `getUsersPlaylistsByUserId ( params? : Object )`
> * **Method**: get 
> * **Path**: /users/{user_id}/playlists 
> * **Description**: [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `postUsersPlaylistsByUserId ( params? : Object )`
> * **Method**: post 
> * **Path**: /users/{user_id}/playlists 
> * **Description**: [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
>   * *body:* 
>      * required: true
>      * type: 
### function `getUsersPlaylistsByUserIdPlaylistId ( params? : Object )`
> * **Method**: get 
> * **Path**: /users/{user_id}/playlists/{playlist_id} 
> * **Description**: [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *fields:* A comma-separated list of fields to filter query
>      * required: false
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `putUsersPlaylistsByUserIdPlaylistId ( params? : Object )`
> * **Method**: put 
> * **Path**: /users/{user_id}/playlists/{playlist_id} 
> * **Description**: [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
>   * *body:* 
>      * required: true
>      * type: 
### function `deleteUsersPlaylistsFollowersByUserIdPlaylistId ( params? : Object )`
> * **Method**: delete 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/followers 
> * **Description**: [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
### function `putUsersPlaylistsFollowersByUserIdPlaylistId ( params? : Object )`
> * **Method**: put 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/followers 
> * **Description**: [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *body:* 
>      * required: true
>      * type: 
### function `getUsersPlaylistsFollowersContainsByUserIdPlaylistId ( params? : Object )`
> * **Method**: get 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/followers/contains 
> * **Description**: [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *ids:* A comma-separated list of users ids
>      * required: true
>      * type: string
### function `deleteUsersPlaylistsTracksByUserIdPlaylistId ( params? : Object )`
> * **Method**: delete 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/tracks 
> * **Description**: [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
>   * *body:* 
>      * required: true
>      * type: 
### function `getUsersPlaylistsTracksByUserIdPlaylistId ( params? : Object )`
> * **Method**: get 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/tracks 
> * **Description**: [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *limit:* The maximum number of items to return
>      * required: false
>      * type: integer
>   * *offset:* The index of the first item to return
>      * required: false
>      * type: integer
>   * *fields:* A comma-separated list of fields to filter query
>      * required: false
>      * type: string
>   * *market:* The market (an ISO 3166-1 alpha-2 country code)
>      * required: false
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `postUsersPlaylistsTracksByUserIdPlaylistId ( params? : Object )`
> * **Method**: post 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/tracks 
> * **Description**: [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *position:* The position to insert the tracks, a zero-based index
>      * required: false
>      * type: integer
>   * *uris:* A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
### function `putUsersPlaylistsTracksByUserIdPlaylistId ( params? : Object )`
> * **Method**: put 
> * **Path**: /users/{user_id}/playlists/{playlist_id}/tracks 
> * **Description**: [Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)  
> * **Parameters**: 
>   * *user_id:* The user's Spotify user ID.
>      * required: true
>      * type: string
>   * *playlist_id:* The Spotify playlist ID.
>      * required: true
>      * type: string
>   * *Accept:* It is used to set specified media type.
>      * required: false
>      * type: string
>   * *body:* 
>      * required: true
>      * type: 
