module.exports = {
    source: "webAPI",
    getAlbums: {
        path: "/albums",
        method: "get",
        parameters: [
            {
                description: "A comma-separated list of IDs",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/albums",
        description: "[Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)\n",
        functionName: "getAlbums",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getAlbumsById: {
        path: "/albums/{id}",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID for the album",
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "album",
                properties: {
                    album_type: {
                        description: "The type of the album: one of 'album', 'single', or 'compilation'.",
                        type: "string"
                    },
                    artists: {
                        description: "The artists of the album. Each artist object includes a link in href to more detailed information about the artist.",
                        items: {
                            $ref: "#/definitions/artist"
                        },
                        type: "array"
                    },
                    available_markets: {
                        description: "The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.",
                        items: {
                            type: "string"
                        },
                        type: "array"
                    },
                    copyrights: {
                        description: "The copyright statements of the album.",
                        items: {
                            properties: {
                                text: {
                                    description: "The copyright text for this album.",
                                    type: "string"
                                },
                                type: {
                                    description: "The type of copyright: C = the copyright, P = the sound recording (performance) copyright.",
                                    type: "string"
                                }
                            },
                            type: "object"
                        },
                        type: "array"
                    },
                    external_ids: {
                        additionalProperties: {
                            description: "The identifier type, for example: 'isrc' - International Standard Recording Code, 'ean' - International Article Number, 'upc' - Universal Product Code",
                            type: "string"
                        },
                        description: "Known external IDs for this album.",
                        type: "object"
                    },
                    external_urls: {
                        additionalProperties: {
                            description: "The type of the URL, for example: 'spotify' - The Spotify URL for the object.",
                            type: "string"
                        },
                        description: "Known external URLs for this album.",
                        type: "object"
                    },
                    genres: {
                        description: "A list of the genres used to classify the album. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)",
                        items: {
                            type: "string"
                        },
                        type: "array"
                    },
                    href: {
                        description: "A link to the Web API endpoint providing full details of the album.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID for the album.",
                        type: "string"
                    },
                    images: {
                        description: "The cover art for the album in various sizes, widest first.",
                        items: {
                            $ref: "#/definitions/image"
                        },
                        type: "array"
                    },
                    name: {
                        description: "The name of the album.",
                        type: "string"
                    },
                    popularity: {
                        description: "The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.",
                        type: "integer"
                    },
                    release_date: {
                        description: "The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'.",
                        type: "string"
                    },
                    release_date_precision: {
                        description: "The precision with which release_date value is known: 'year', 'month', or 'day'.",
                        type: "string"
                    },
                    tracks: {
                        $ref: "#/definitions/track-simple-page"
                    },
                    type: {
                        description: "The object type: 'album'.",
                        type: "string"
                    },
                    uri: {
                        description: "The Spotify URI for the album.",
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/albums/{id}",
        description: "[Get an Album](https://developer.spotify.com/web-api/get-album/)\n",
        functionName: "getAlbumsById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getAlbumsTracksById: {
        path: "/albums/{id}/tracks",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID for the album",
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            },
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "track-simple-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/track-simple"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            }
        },
        uri: "https://api.spotify.com/v1/albums/{id}/tracks",
        description: "[Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)\n",
        functionName: "getAlbumsTracksById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getArtists: {
        path: "/artists",
        method: "get",
        parameters: [
            {
                description: "A comma-separated list of IDs",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/artists",
        description: "[Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)\n",
        functionName: "getArtists",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getArtistsById: {
        path: "/artists/{id}",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID for the artist",
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "artist",
                properties: {
                    external_urls: {
                        additionalProperties: {
                            type: "string"
                        },
                        description: "Known external URLs for this artist.",
                        type: "object"
                    },
                    followers: {
                        $ref: "#/definitions/followers"
                    },
                    genres: {
                        description: "A list of the genres the artist is associated with. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)",
                        items: {
                            type: "string"
                        },
                        type: "array"
                    },
                    href: {
                        description: "A link to the Web API endpoint providing full details of the artist.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID for the artist.",
                        type: "string"
                    },
                    images: {
                        description: "Images of the artist in various sizes, widest first.",
                        items: {
                            $ref: "#/definitions/image"
                        },
                        type: "array"
                    },
                    name: {
                        description: "The name of the artist.",
                        type: "string"
                    },
                    popularity: {
                        description: "The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.",
                        type: "integer"
                    },
                    type: {
                        description: "The object type: 'artist'",
                        type: "string"
                    },
                    uri: {
                        description: "The Spotify URI for the artist.",
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/artists/{id}",
        description: "[Get an Artist](https://developer.spotify.com/web-api/get-artist/)\n",
        functionName: "getArtistsById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getArtistsAlbumsById: {
        path: "/artists/{id}/albums",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID for the artist",
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            },
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "Filter by album types",
                "in": "query",
                name: "album_type",
                required: false,
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "album-simple-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/album-simple"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            }
        },
        uri: "https://api.spotify.com/v1/artists/{id}/albums",
        description: "[Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)\n",
        functionName: "getArtistsAlbumsById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getArtistsRelatedArtistsById: {
        path: "/artists/{id}/related-artists",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID for the artist",
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/artists/{id}/related-artists",
        description: "[Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)\n",
        functionName: "getArtistsRelatedArtistsById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getArtistsTopTracksById: {
        path: "/artists/{id}/top-tracks",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID for the artist",
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            },
            {
                description: "The country (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "country",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/artists/{id}/top-tracks",
        description: "[Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)\n",
        functionName: "getArtistsTopTracksById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getBrowseCategories: {
        path: "/browse/categories",
        method: "get",
        parameters: [
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The country (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "country",
                required: false,
                type: "string"
            },
            {
                description: "The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning \"Spanish (Mexico)\".\n",
                "in": "query",
                name: "locale",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "category-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/category"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/browse/categories",
        description: "[Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)\n",
        functionName: "getBrowseCategories",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getBrowseCategoriesByCategoryId: {
        path: "/browse/categories/{category_id}",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID of the category you wish to fetch.",
                "in": "path",
                name: "category_id",
                required: true,
                type: "string"
            },
            {
                description: "The country (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "country",
                required: false,
                type: "string"
            },
            {
                description: "The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning \"Spanish (Mexico)\".\n",
                "in": "query",
                name: "locale",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "category",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning full details of the category.",
                        type: "string"
                    },
                    icons: {
                        items: {
                            $ref: "#/definitions/image"
                        },
                        type: "array"
                    },
                    id: {
                        description: "The Spotify category ID of the category.",
                        type: "string"
                    },
                    name: {
                        description: "The name of the category.",
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/browse/categories/{category_id}",
        description: "[Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)\n",
        functionName: "getBrowseCategoriesByCategoryId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getBrowseCategoriesPlaylistsByCategoryId: {
        path: "/browse/categories/{category_id}/playlists",
        method: "get",
        parameters: [
            {
                description: "The Spotify ID of the category you wish to fetch.",
                "in": "path",
                name: "category_id",
                required: true,
                type: "string"
            },
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The country (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "country",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": "OK",
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/browse/categories/{category_id}/playlists",
        description: "[Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)\n",
        functionName: "getBrowseCategoriesPlaylistsByCategoryId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getBrowseFeaturedPlaylists: {
        path: "/browse/featured-playlists",
        method: "get",
        parameters: [
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The country (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "country",
                required: false,
                type: "string"
            },
            {
                description: "The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning \"Spanish (Mexico)\".\n",
                "in": "query",
                name: "locale",
                required: false,
                type: "string"
            },
            {
                description: "A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: \"2014-10-23T09:00:00\" for a user whose local time is 9AM.\n",
                "in": "query",
                name: "timestamp",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "featured-playlists",
                properties: {
                    message: {
                        description: "A sentence describing the context for the featured playlists.",
                        type: "string"
                    },
                    playlists: {
                        $ref: "#/definitions/playlist-simple-page"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/browse/featured-playlists",
        description: "[Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)\n",
        functionName: "getBrowseFeaturedPlaylists",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getBrowseNewReleases: {
        path: "/browse/new-releases",
        method: "get",
        parameters: [
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The country (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "country",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "album-simple-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/album-simple"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/browse/new-releases",
        description: "[Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)\n",
        functionName: "getBrowseNewReleases",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getMe: {
        path: "/me",
        method: "get",
        parameters: [],
        response: {
            "200": {
                schemaName: "current-user-profile",
                properties: {
                    birthdate: {
                        description: "The user's date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope.",
                        type: "string"
                    },
                    country: {
                        description: "The country of the user, as set in the user's account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.",
                        type: "string"
                    },
                    displayName: {
                        description: "The name displayed on the user's profile.",
                        type: "string"
                    },
                    email: {
                        description: "The user's email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.",
                        type: "string"
                    },
                    external_urls: {
                        additionalProperties: {
                            type: "string"
                        },
                        description: "Known external URLs for this user.",
                        type: "object"
                    },
                    followers: {
                        $ref: "#/definitions/followers"
                    },
                    href: {
                        description: "A link to the Web API endpoint for this user.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID for this user.",
                        type: "string"
                    },
                    product: {
                        description: "The user's Spotify subscription level: 'premium', 'free', etc. (The subscription level 'open' can be considered the same as 'free'.) This field is only available when the current user has granted access to the user-read-private scope.",
                        type: "string"
                    },
                    type: {
                        description: "The object type: 'user'",
                        type: "string"
                    },
                    uri: {
                        description: "The Spotify URI for the user.",
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/me",
        description: "[Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)\n",
        functionName: "getMe",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    deleteMeFollowing: {
        path: "/me/following",
        method: "delete",
        parameters: [
            {
                description: "The type to unfollow.",
                "enum": [
                    "artist",
                    "user"
                ],
                "in": "query",
                name: "type",
                required: true,
                type: "string"
            },
            {
                description: "A comma-separated list of the artists or users ids",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            }
        ],
        response: {
            "204": "No Content"
        },
        uri: "https://api.spotify.com/v1/me/following",
        description: "[Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)\n",
        functionName: "deleteMeFollowing",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getMeFollowing: {
        path: "/me/following",
        method: "get",
        parameters: [
            {
                description: "The ID type, currently only artist is supported.",
                "enum": [
                    "artist"
                ],
                "in": "query",
                name: "type",
                required: true,
                type: "string"
            },
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                description: "The last artist ID retrieved from the previous request.",
                "in": "query",
                name: "after",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "user-followed",
                properties: {
                    artists: {
                        description: "Present if the type of followe items is 'artist'.",
                        properties: {
                            cursor: {
                                description: "The cursors used to find the next set of items.",
                                properties: {
                                    after: {
                                        description: "The cursor to use as key to find the next page of items.",
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            href: {
                                description: "A link to the Web API endpoint returning the full result of the request.",
                                type: "string"
                            },
                            items: {
                                description: "The requested data.",
                                items: {
                                    $ref: "#/definitions/artist"
                                },
                                type: "array"
                            },
                            limit: {
                                description: "The maximum number of items in the response (as set in the query or by default).",
                                type: "integer"
                            },
                            next: {
                                description: "URL to the next page of items. (null if none)",
                                type: "string"
                            },
                            total: {
                                description: "The total number of items available to return.",
                                type: "integer"
                            }
                        },
                        type: "object"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/me/following",
        description: "[Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)\n",
        functionName: "getMeFollowing",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    putMeFollowing: {
        path: "/me/following",
        method: "put",
        parameters: [
            {
                description: "The type to follow.",
                "enum": [
                    "artist",
                    "user"
                ],
                "in": "query",
                name: "type",
                required: true,
                type: "string"
            },
            {
                description: "A comma-separated list of the artists or users ids",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            }
        ],
        response: {
            "204": "No Content"
        },
        uri: "https://api.spotify.com/v1/me/following",
        description: "[Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)\n",
        functionName: "putMeFollowing",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getMeFollowingContains: {
        path: "/me/following/contains",
        method: "get",
        parameters: [
            {
                description: "The type to follow.",
                "enum": [
                    "artist",
                    "user"
                ],
                "in": "query",
                name: "type",
                required: true,
                type: "string"
            },
            {
                description: "A comma-separated string of the artists or users ids.",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/me/following/contains",
        description: "[Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)\n",
        functionName: "getMeFollowingContains",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    deleteMeTracks: {
        path: "/me/tracks",
        method: "delete",
        parameters: [
            {
                description: "A comma-separated list of IDs",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": "OK",
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/me/tracks",
        description: "[Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)\n",
        functionName: "deleteMeTracks",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getMeTracks: {
        path: "/me/tracks",
        method: "get",
        parameters: [
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "saved-track-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/saved-track"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/me/tracks",
        description: "[Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)\n",
        functionName: "getMeTracks",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    putMeTracks: {
        path: "/me/tracks",
        method: "put",
        parameters: [
            {
                description: "A comma-separated list of IDs",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": "OK",
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/me/tracks",
        description: "[Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)\n",
        functionName: "putMeTracks",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getMeTracksContains: {
        path: "/me/tracks/contains",
        method: "get",
        parameters: [
            {
                description: "A comma-separated list of IDs",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/me/tracks/contains",
        description: "[Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)\n",
        functionName: "getMeTracksContains",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getSearch: {
        path: "/search",
        method: "get",
        parameters: [
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.",
                "in": "query",
                name: "q",
                required: true,
                type: "string"
            },
            {
                description: "A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with \"abacab\" in their name.",
                "in": "query",
                name: "type",
                required: true,
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.",
                "in": "query",
                name: "market",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "search",
                properties: {
                    albums: {
                        description: "Present if the type of search includes 'album'.",
                        properties: {
                            href: {
                                description: "A link to the Web API endpoint returning the full result of the request.",
                                type: "string"
                            },
                            items: {
                                description: "The requested data.",
                                items: {
                                    $ref: "#/definitions/album-simple"
                                },
                                type: "array"
                            },
                            limit: {
                                description: "The maximum number of items in the response (as set in the query or by default).",
                                type: "integer"
                            },
                            next: {
                                description: "URL to the next page of items. (null if none)",
                                type: "string"
                            },
                            offset: {
                                description: "The offset of the items returned (as set in the query or by default).",
                                type: "integer"
                            },
                            previous: {
                                description: "URL to the previous page of items. (null if none)",
                                type: "string"
                            },
                            total: {
                                description: "The total number of items available to return.",
                                type: "integer"
                            }
                        },
                        type: "object"
                    },
                    artists: {
                        description: "Present if the type of search includes 'artist'.",
                        properties: {
                            href: {
                                description: "A link to the Web API endpoint returning the full result of the request.",
                                type: "string"
                            },
                            items: {
                                description: "The requested data.",
                                items: {
                                    $ref: "#/definitions/artist"
                                },
                                type: "array"
                            },
                            limit: {
                                description: "The maximum number of items in the response (as set in the query or by default).",
                                type: "integer"
                            },
                            next: {
                                description: "URL to the next page of items. (null if none)",
                                type: "string"
                            },
                            offset: {
                                description: "The offset of the items returned (as set in the query or by default).",
                                type: "integer"
                            },
                            previous: {
                                description: "URL to the previous page of items. (null if none)",
                                type: "string"
                            },
                            total: {
                                description: "The total number of items available to return.",
                                type: "integer"
                            }
                        },
                        type: "object"
                    },
                    tracks: {
                        description: "Present if the type of search includes 'track'.",
                        properties: {
                            href: {
                                description: "A link to the Web API endpoint returning the full result of the request.",
                                type: "string"
                            },
                            items: {
                                description: "The requested data.",
                                items: {
                                    $ref: "#/definitions/track"
                                },
                                type: "array"
                            },
                            limit: {
                                description: "The maximum number of items in the response (as set in the query or by default).",
                                type: "integer"
                            },
                            next: {
                                description: "URL to the next page of items. (null if none)",
                                type: "string"
                            },
                            offset: {
                                description: "The offset of the items returned (as set in the query or by default).",
                                type: "integer"
                            },
                            previous: {
                                description: "URL to the previous page of items. (null if none)",
                                type: "string"
                            },
                            total: {
                                description: "The total number of items available to return.",
                                type: "integer"
                            }
                        },
                        type: "object"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/search",
        description: "[Search for an Item](https://developer.spotify.com/web-api/search-item/)\n",
        functionName: "getSearch",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getTracks: {
        path: "/tracks",
        method: "get",
        parameters: [
            {
                description: "A comma-separated list of IDs",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/tracks",
        description: "[Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)\n",
        functionName: "getTracks",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getTracksById: {
        path: "/tracks/{id}",
        method: "get",
        parameters: [
            {
                "in": "path",
                name: "id",
                required: true,
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "track",
                properties: {
                    album: {
                        $ref: "#/definitions/album-simple"
                    },
                    artists: {
                        description: "The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.",
                        items: {
                            $ref: "#/definitions/artist-simple"
                        },
                        type: "array"
                    },
                    available_markets: {
                        description: "A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. ",
                        items: {
                            type: "string"
                        },
                        type: "array"
                    },
                    disc_number: {
                        description: "The disc number (usually 1 unless the album consists of more than one disc).",
                        type: "integer"
                    },
                    duration_ms: {
                        description: "The track length in milliseconds.",
                        type: "integer"
                    },
                    explicit: {
                        description: "Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).",
                        type: "boolean"
                    },
                    external_ids: {
                        additionalProperties: {
                            description: "The identifier type, for example: 'isrc' - International Standard Recording Code, 'ean' - International Article Number, 'upc' - Universal Product Code",
                            type: "string"
                        },
                        description: "Known external IDs for the track.",
                        type: "object"
                    },
                    external_urls: {
                        additionalProperties: {
                            description: "The type of the URL, for example: 'spotify' - The Spotify URL for the object.",
                            type: "string"
                        },
                        description: "Known external URLs for this track.",
                        type: "object"
                    },
                    href: {
                        description: "A link to the Web API endpoint providing full details of the track.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID for the track.",
                        type: "string"
                    },
                    is_playable: {
                        description: "Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.",
                        type: "boolean"
                    },
                    linked_from: {
                        description: "Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.",
                        properties: {
                            external_urls: {
                                additionalProperties: {
                                    description: "The type of the URL, for example: 'spotify' - The Spotify URL for the object.",
                                    type: "string"
                                },
                                description: "Known external URLs for this track.",
                                type: "object"
                            },
                            href: {
                                description: "A link to the Web API endpoint providing full details of the track.",
                                type: "string"
                            },
                            id: {
                                description: "The Spotify ID for the track.",
                                type: "string"
                            },
                            type: {
                                description: "The object type: 'track'.",
                                type: "string"
                            },
                            uri: {
                                description: "The Spotify URI for the track.",
                                type: "string"
                            }
                        },
                        type: "object"
                    },
                    name: {
                        description: "The name of the track.",
                        type: "string"
                    },
                    preview_url: {
                        description: "A URL to a 30 second preview (MP3 format) of the track.",
                        type: "string"
                    },
                    track_number: {
                        description: "The number of the track. If an album has several discs, the track number is the number on the specified disc.",
                        type: "integer"
                    },
                    type: {
                        description: "The object type: 'track'.",
                        type: "string"
                    },
                    uri: {
                        description: "The Spotify URI for the track.",
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/tracks/{id}",
        description: "[Get a Track](https://developer.spotify.com/web-api/get-track/)\n",
        functionName: "getTracksById",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getUsersByUserId: {
        path: "/users/{user_id}",
        method: "get",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "user-profile",
                properties: {
                    displayName: {
                        description: "The name displayed on the user's profile.",
                        type: "string"
                    },
                    external_urls: {
                        additionalProperties: {
                            type: "string"
                        },
                        description: "Known external URLs for this user.",
                        type: "object"
                    },
                    followers: {
                        $ref: "#/definitions/followers"
                    },
                    href: {
                        description: "A link to the Web API endpoint for this user.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID for this user.",
                        type: "string"
                    },
                    type: {
                        description: "The object type: 'user'",
                        type: "string"
                    },
                    uri: {
                        description: "The Spotify URI for the user.",
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://api.spotify.com/v1/users/{user_id}",
        description: "[Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)\n",
        functionName: "getUsersByUserId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getUsersPlaylistsByUserId: {
        path: "/users/{user_id}/playlists",
        method: "get",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "playlist-simple-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/playlist-simple"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists",
        description: "[Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)\n",
        functionName: "getUsersPlaylistsByUserId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    postUsersPlaylistsByUserId: {
        path: "/users/{user_id}/playlists",
        method: "post",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            },
            {
                "in": "body",
                name: "body",
                required: true,
                schema: {
                    properties: {
                        name: {
                            type: "string"
                        },
                        "public": {
                            type: "boolean"
                        }
                    },
                    required: [
                        "name"
                    ],
                    type: "object"
                }
            }
        ],
        response: {
            "201": {
                schemaName: "playlist",
                properties: {
                    collaborative: {
                        description: "True if the owner allows other users to modify the playlist.",
                        type: "boolean"
                    },
                    description: {
                        description: "The playlist description. Only returned for modified, verified playlists, otherwise null.",
                        type: "string"
                    },
                    external_urls: {
                        additionalProperties: {
                            description: "The type of the URL, for example: 'spotify' - The Spotify URL for the object.",
                            type: "string"
                        },
                        description: "Known external URLs for this album.",
                        type: "object"
                    },
                    followers: {
                        description: "Information about the followers of the playlist.",
                        properties: {
                            href: {
                                description: "A link to the Web API endpoint providing full details of the followers; null if not available.",
                                type: "string"
                            },
                            total: {
                                description: "The total number of followers.",
                                type: "integer"
                            }
                        },
                        type: "object"
                    },
                    href: {
                        description: "A link to the Web API endpoint providing full details of the playlist.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID of the playlist.",
                        type: "string"
                    },
                    images: {
                        description: "The cover art for the album in various sizes, widest first.",
                        items: {
                            $ref: "#/definitions/image"
                        },
                        type: "array"
                    },
                    name: {
                        description: "The name of the playlist.",
                        type: "string"
                    },
                    owner: {
                        $ref: "#/definitions/user-profile"
                    },
                    "public": {
                        description: "The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.",
                        type: "boolean"
                    },
                    snapshot_id: {
                        description: "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version",
                        type: "string"
                    },
                    tracks: {
                        $ref: "#/definitions/playlist-track-page"
                    },
                    type: {
                        description: "The object type: 'playlist'.",
                        type: "string"
                    },
                    uri: {
                        description: "Spotify URI of the playlist.",
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists",
        description: "[Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)\n",
        functionName: "postUsersPlaylistsByUserId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getUsersPlaylistsByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}",
        method: "get",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                description: "A comma-separated list of fields to filter query",
                "in": "query",
                name: "fields",
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "playlist",
                properties: {
                    collaborative: {
                        description: "True if the owner allows other users to modify the playlist.",
                        type: "boolean"
                    },
                    description: {
                        description: "The playlist description. Only returned for modified, verified playlists, otherwise null.",
                        type: "string"
                    },
                    external_urls: {
                        additionalProperties: {
                            description: "The type of the URL, for example: 'spotify' - The Spotify URL for the object.",
                            type: "string"
                        },
                        description: "Known external URLs for this album.",
                        type: "object"
                    },
                    followers: {
                        description: "Information about the followers of the playlist.",
                        properties: {
                            href: {
                                description: "A link to the Web API endpoint providing full details of the followers; null if not available.",
                                type: "string"
                            },
                            total: {
                                description: "The total number of followers.",
                                type: "integer"
                            }
                        },
                        type: "object"
                    },
                    href: {
                        description: "A link to the Web API endpoint providing full details of the playlist.",
                        type: "string"
                    },
                    id: {
                        description: "The Spotify ID of the playlist.",
                        type: "string"
                    },
                    images: {
                        description: "The cover art for the album in various sizes, widest first.",
                        items: {
                            $ref: "#/definitions/image"
                        },
                        type: "array"
                    },
                    name: {
                        description: "The name of the playlist.",
                        type: "string"
                    },
                    owner: {
                        $ref: "#/definitions/user-profile"
                    },
                    "public": {
                        description: "The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.",
                        type: "boolean"
                    },
                    snapshot_id: {
                        description: "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version",
                        type: "string"
                    },
                    tracks: {
                        $ref: "#/definitions/playlist-track-page"
                    },
                    type: {
                        description: "The object type: 'playlist'.",
                        type: "string"
                    },
                    uri: {
                        description: "Spotify URI of the playlist.",
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}",
        description: "[Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)\n",
        functionName: "getUsersPlaylistsByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    putUsersPlaylistsByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}",
        method: "put",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            },
            {
                "in": "body",
                name: "body",
                required: true,
                schema: {
                    properties: {
                        name: {
                            type: "string"
                        },
                        "public": {
                            type: "boolean"
                        }
                    },
                    type: "object"
                }
            }
        ],
        response: {
            "200": "OK",
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}",
        description: "[Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)\n",
        functionName: "putUsersPlaylistsByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    deleteUsersPlaylistsFollowersByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/followers",
        method: "delete",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/followers",
        description: "[Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)\n",
        functionName: "deleteUsersPlaylistsFollowersByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    putUsersPlaylistsFollowersByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/followers",
        method: "put",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                "in": "body",
                name: "body",
                required: true,
                schema: {
                    properties: {
                        "public": {
                            type: "boolean"
                        }
                    },
                    type: "object"
                }
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/followers",
        description: "[Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)\n",
        functionName: "putUsersPlaylistsFollowersByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getUsersPlaylistsFollowersContainsByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/followers/contains",
        method: "get",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                description: "A comma-separated list of users ids",
                "in": "query",
                name: "ids",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": "OK"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/followers/contains",
        description: "[Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)\n",
        functionName: "getUsersPlaylistsFollowersContainsByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    deleteUsersPlaylistsTracksByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/tracks",
        method: "delete",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            },
            {
                "in": "body",
                name: "body",
                required: true,
                schema: {
                    properties: {
                        tracks: {
                            items: {},
                            type: "array"
                        }
                    },
                    required: [
                        "tracks"
                    ],
                    type: "object"
                }
            }
        ],
        response: {
            "200": {
                schemaName: "playlist-snapshot",
                properties: {
                    snapshot_id: {
                        description: "The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.",
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks",
        description: "[Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)\n",
        functionName: "deleteUsersPlaylistsTracksByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    getUsersPlaylistsTracksByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/tracks",
        method: "get",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                "default": 20,
                description: "The maximum number of items to return",
                "in": "query",
                maximum: 50,
                minimum: 0,
                name: "limit",
                required: false,
                type: "integer"
            },
            {
                "default": 0,
                description: "The index of the first item to return",
                "in": "query",
                name: "offset",
                required: false,
                type: "integer"
            },
            {
                description: "A comma-separated list of fields to filter query",
                "in": "query",
                name: "fields",
                type: "string"
            },
            {
                description: "The market (an ISO 3166-1 alpha-2 country code)",
                "in": "query",
                name: "market",
                required: false,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "playlist-track-page",
                properties: {
                    href: {
                        description: "A link to the Web API endpoint returning the full result of the request.",
                        type: "string"
                    },
                    items: {
                        description: "The requested data.",
                        items: {
                            $ref: "#/definitions/playlist-track"
                        },
                        type: "array"
                    },
                    limit: {
                        description: "The maximum number of items in the response (as set in the query or by default).",
                        type: "integer"
                    },
                    next: {
                        description: "URL to the next page of items. (null if none)",
                        type: "string"
                    },
                    offset: {
                        description: "The offset of the items returned (as set in the query or by default).",
                        type: "integer"
                    },
                    previous: {
                        description: "URL to the previous page of items. (null if none)",
                        type: "string"
                    },
                    total: {
                        description: "The total number of items available to return.",
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks",
        description: "[Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)\n",
        functionName: "getUsersPlaylistsTracksByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    postUsersPlaylistsTracksByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/tracks",
        method: "post",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                description: "The position to insert the tracks, a zero-based index",
                "in": "query",
                name: "position",
                required: false,
                type: "integer"
            },
            {
                description: "A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.",
                "in": "query",
                name: "uris",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "playlist-snapshot",
                properties: {
                    snapshot_id: {
                        description: "The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.",
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks",
        description: "[Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)\n",
        functionName: "postUsersPlaylistsTracksByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    },
    putUsersPlaylistsTracksByUserIdPlaylistId: {
        path: "/users/{user_id}/playlists/{playlist_id}/tracks",
        method: "put",
        parameters: [
            {
                description: "The user's Spotify user ID.",
                "in": "path",
                name: "user_id",
                required: true,
                type: "string"
            },
            {
                description: "The Spotify playlist ID.",
                "in": "path",
                name: "playlist_id",
                required: true,
                type: "string"
            },
            {
                description: "It is used to set specified media type.",
                "in": "header",
                name: "Accept",
                type: "string"
            },
            {
                "in": "body",
                name: "body",
                required: true,
                schema: {
                    properties: {
                        uris: {
                            items: {},
                            type: "array"
                        }
                    },
                    required: [
                        "uris"
                    ],
                    type: "object"
                }
            }
        ],
        response: {
            "200": {
                schemaName: "playlist-snapshot",
                properties: {
                    snapshot_id: {
                        description: "The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.",
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "429": "API rate limit exceeded. See http://developer.spotify.com/web-api/user-guide/#rate-limiting for details.\n"
        },
        uri: "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks",
        description: "[Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)\n",
        functionName: "putUsersPlaylistsTracksByUserIdPlaylistId",
        securityDefinitions: {
            oauth_2_0_accessCode: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "accessCode",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                tokenUrl: "https://accounts.spotify.com/api/token",
                type: "oauth2"
            },
            oauth_2_0_implicit: {
                authorizationUrl: "https://accounts.spotify.com/authorize",
                description: "Spotify supports OAuth 2.0 for authenticating all API requests.\n",
                flow: "implicit",
                scopes: {
                    "playlist-modify-private": "",
                    "playlist-modify-public": "",
                    "playlist-read-collaborative": "",
                    "playlist-read-private": "",
                    "user-follow-modify": "",
                    "user-follow-read": "",
                    "user-library-modify": "",
                    "user-library-read": "",
                    "user-read-birthdate": "",
                    "user-read-email": "",
                    "user-read-private": ""
                },
                type: "oauth2"
            }
        }
    }
}