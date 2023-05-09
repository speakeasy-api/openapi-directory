# APIV2

### Available Operations

* [CreatePodcast](#createpodcast) - Create podcast
* [CreatePodcastEpisode](#createpodcastepisode) - Create podcast episode
* [DeletePodcast](#deletepodcast) - Delete podcast
* [DeletePodcast1](#deletepodcast1) - Delete podcast episode
* [GetPartnerAggregatorStations](#getpartneraggregatorstations) - List stations
* [GetPodcast](#getpodcast) - Get podcast
* [GetPodcastCategories](#getpodcastcategories) - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* [GetPodcastCountries](#getpodcastcountries) - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* [GetPodcastEpisode](#getpodcastepisode) - Get podcast episode
* [GetPodcastEpisodes](#getpodcastepisodes) - Get podcast episodes
* [GetPodcastLanguages](#getpodcastlanguages) - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* [GetStationCountries](#getstationcountries) - Get the list of Countries that can be used to filter stations in the search stations request
* [GetStationGenres](#getstationgenres) - Get the list of Genres that can be used to filter stations in the search stations request
* [GetStationLanguages](#getstationlanguages) - Get the list of Languages that can be used to filter stations in the search stations request
* [SearchPodcasts](#searchpodcasts) - Search podcasts
* [SearchStations](#searchstations) - Search stations
* [UpdatePodcast](#updatepodcast) - Update podcast
* [UpdatePodcastEpisode](#updatepodcastepisode) - Update podcast episode

## CreatePodcast

Create podcast

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.CreatePodcast(ctx, operations.CreatePodcastRequestBody{
        FileLogo: operations.CreatePodcastRequestBodyFileLogo{
            Content: []byte("excepturi"),
            FileLogo: "nisi",
        },
        Podcast: shared.Podcast{
            Author: sdk.String("recusandae"),
            Block: sdk.Bool(false),
            Categories: []string{
                "ab",
                "quis",
                "veritatis",
                "deserunt",
            },
            Copyright: sdk.String("perferendis"),
            Country: sdk.String("Guinea-Bissau"),
            Description: "repellendus",
            Explicit: sdk.Bool(false),
            Image: sdk.String("sapiente"),
            Key: sdk.String("quo"),
            Keywords: []string{
                "at",
            },
            Language: "at",
            Link: sdk.String("maiores"),
            OwnerEmail: sdk.String("molestiae"),
            OwnerName: sdk.String("quod"),
            ShowType: sdk.String("quod"),
            Subtitle: sdk.String("esse"),
            Summary: "totam",
            Title: "Miss",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreatePodcastEpisode

Create podcast episode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.CreatePodcastEpisode(ctx, operations.CreatePodcastEpisodeRequest{
        RequestBody: &operations.CreatePodcastEpisodeRequestBody{
            Episode: shared.PodcastEpisode{
                Author: sdk.String("dolorum"),
                Block: sdk.Bool(false),
                Description: "dicta",
                Duration: sdk.Int64(720633),
                Episode: sdk.Int64(639921),
                EpisodeType: sdk.String("occaecati"),
                Explicit: sdk.Bool(false),
                FileURL: sdk.String("fugit"),
                Image: sdk.String("deleniti"),
                Key: sdk.String("hic"),
                Link: sdk.String("optio"),
                PublishDate: types.MustTimeFromString("2022-10-15T16:29:54.554Z"),
                Season: sdk.Int64(414662),
                Size: sdk.Int64(473600),
                Subtitle: sdk.String("modi"),
                Summary: "qui",
                Tags: []string{
                    "cum",
                    "esse",
                    "ipsum",
                    "excepturi",
                },
                Title: "Mr.",
            },
            FileLogo: operations.CreatePodcastEpisodeRequestBodyFileLogo{
                Content: []byte("perferendis"),
                FileLogo: "ad",
            },
            FileMedia: operations.CreatePodcastEpisodeRequestBodyFileMedia{
                Content: []byte("natus"),
                FileMedia: "sed",
            },
        },
        PodcastKey: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DeletePodcast

Delete podcast

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.DeletePodcast(ctx, operations.DeletePodcastRequest{
        PodcastKey: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePodcast1

Delete podcast episode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.DeletePodcast1(ctx, operations.DeletePodcast1Request{
        EpisodeKey: "natus",
        PodcastKey: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPartnerAggregatorStations

List stations

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPartnerAggregatorStations(ctx, operations.GetPartnerAggregatorStationsRequest{
        HitsPerPage: sdk.String("hic"),
        Page: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPodcast

Get podcast

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPodcast(ctx, operations.GetPodcastRequest{
        PodcastKey: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPodcastCategories

Get the list of Categories that can be used to filter podcasts in the search podcasts request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPodcastCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPodcastCountries

Get the list of Countries that can be used to filter podcasts in the search podcasts request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPodcastCountries(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPodcastEpisode

Get podcast episode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPodcastEpisode(ctx, operations.GetPodcastEpisodeRequest{
        EpisodeKey: "in",
        PodcastKey: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPodcastEpisodes

Get podcast episodes

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPodcastEpisodes(ctx, operations.GetPodcastEpisodesRequest{
        Limit: sdk.String("iste"),
        Offset: sdk.String("iure"),
        PodcastKey: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPodcastLanguages

Get the list of Languages that can be used to filter podcasts in the search podcasts request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetPodcastLanguages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStationCountries

Get the list of Countries that can be used to filter stations in the search stations request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetStationCountries(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStationGenres

Get the list of Genres that can be used to filter stations in the search stations request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetStationGenres(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStationLanguages

Get the list of Languages that can be used to filter stations in the search stations request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.GetStationLanguages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SearchPodcasts

Search podcasts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.SearchPodcasts(ctx, shared.PodcastSearchParams{
        Filters: &shared.PodcastFilters{
            Category: []string{
                "architecto",
                "ipsa",
                "reiciendis",
            },
            Country: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            Language: []string{
                "corporis",
            },
            PodcastType: shared.PodcastFiltersPodcastTypeEnumPodcasts.ToPointer(),
        },
        HitsPerPage: sdk.Int(750686),
        Page: sdk.Int(315428),
        Query: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SearchStations

Search stations

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.SearchStations(ctx, shared.StationSearchParams{
        Filters: &shared.StationFilters{
            Country: []string{
                "minima",
                "excepturi",
            },
            Genre: []string{
                "iure",
            },
            Language: []string{
                "doloribus",
                "sapiente",
                "architecto",
            },
        },
        HitsPerPage: sdk.Int(652790),
        Page: sdk.Int(208876),
        Query: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdatePodcast

Update podcast

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.UpdatePodcast(ctx, operations.UpdatePodcastRequest{
        RequestBody: &operations.UpdatePodcastRequestBody{
            FileLogo: &operations.UpdatePodcastRequestBodyFileLogo{
                Content: []byte("consequuntur"),
                FileLogo: "repellat",
            },
            Podcast: shared.Podcast{
                Author: sdk.String("mollitia"),
                Block: sdk.Bool(false),
                Categories: []string{
                    "numquam",
                    "commodi",
                    "quam",
                },
                Copyright: sdk.String("molestiae"),
                Country: sdk.String("Dominican Republic"),
                Description: "error",
                Explicit: sdk.Bool(false),
                Image: sdk.String("quia"),
                Key: sdk.String("quis"),
                Keywords: []string{
                    "laborum",
                },
                Language: "animi",
                Link: sdk.String("enim"),
                OwnerEmail: sdk.String("odit"),
                OwnerName: sdk.String("quo"),
                ShowType: sdk.String("sequi"),
                Subtitle: sdk.String("tenetur"),
                Summary: "ipsam",
                Title: "Miss",
            },
        },
        PodcastKey: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdatePodcastEpisode

Update podcast episode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.UpdatePodcastEpisode(ctx, operations.UpdatePodcastEpisodeRequest{
        RequestBody: &operations.UpdatePodcastEpisodeRequestBody{
            Episode: shared.PodcastEpisode{
                Author: sdk.String("aut"),
                Block: sdk.Bool(false),
                Description: "quasi",
                Duration: sdk.Int64(622846),
                Episode: sdk.Int64(837945),
                EpisodeType: sdk.String("laborum"),
                Explicit: sdk.Bool(false),
                FileURL: sdk.String("quasi"),
                Image: sdk.String("reiciendis"),
                Key: sdk.String("voluptatibus"),
                Link: sdk.String("vero"),
                PublishDate: types.MustTimeFromString("2022-06-28T23:41:25.321Z"),
                Season: sdk.Int64(976762),
                Size: sdk.Int64(55714),
                Subtitle: sdk.String("omnis"),
                Summary: "voluptate",
                Tags: []string{
                    "perferendis",
                    "doloremque",
                    "reprehenderit",
                },
                Title: "Mrs.",
            },
            FileLogo: &operations.UpdatePodcastEpisodeRequestBodyFileLogo{
                Content: []byte("maiores"),
                FileLogo: "dicta",
            },
        },
        EpisodeKey: "corporis",
        PodcastKey: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
