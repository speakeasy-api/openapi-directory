# apiV2

### Available Operations

* [createPodcast](#createpodcast) - Create podcast
* [createPodcastEpisode](#createpodcastepisode) - Create podcast episode
* [deletePodcast](#deletepodcast) - Delete podcast
* [deletePodcast1](#deletepodcast1) - Delete podcast episode
* [getPartnerAggregatorStations](#getpartneraggregatorstations) - List stations
* [getPodcast](#getpodcast) - Get podcast
* [getPodcastCategories](#getpodcastcategories) - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* [getPodcastCountries](#getpodcastcountries) - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* [getPodcastEpisode](#getpodcastepisode) - Get podcast episode
* [getPodcastEpisodes](#getpodcastepisodes) - Get podcast episodes
* [getPodcastLanguages](#getpodcastlanguages) - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* [getStationCountries](#getstationcountries) - Get the list of Countries that can be used to filter stations in the search stations request
* [getStationGenres](#getstationgenres) - Get the list of Genres that can be used to filter stations in the search stations request
* [getStationLanguages](#getstationlanguages) - Get the list of Languages that can be used to filter stations in the search stations request
* [searchPodcasts](#searchpodcasts) - Search podcasts
* [searchStations](#searchstations) - Search stations
* [updatePodcast](#updatepodcast) - Update podcast
* [updatePodcastEpisode](#updatepodcastepisode) - Update podcast episode

## createPodcast

Create podcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePodcastRequestBody;
import org.openapis.openapi.models.operations.CreatePodcastRequestBodyFileLogo;
import org.openapis.openapi.models.operations.CreatePodcastResponse;
import org.openapis.openapi.models.shared.Podcast;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePodcastRequestBody req = new CreatePodcastRequestBody(                new CreatePodcastRequestBodyFileLogo("recusandae".getBytes(), "temporibus");,                 new Podcast(                new String[]{{
                                                add("quis"),
                                            }}, "veritatis", "deserunt", "perferendis", "ipsam") {{
                                author = "repellendus";
                                block = false;
                                copyright = "sapiente";
                                country = "San Marino";
                                explicit = false;
                                image = "odit";
                                key = "at";
                                keywords = new String[]{{
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                }};
                                link = "esse";
                                ownerEmail = "totam";
                                ownerName = "porro";
                                showType = "dolorum";
                                subtitle = "dicta";
                            }};);            

            CreatePodcastResponse res = sdk.apiV2.createPodcast(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPodcastEpisode

Create podcast episode

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePodcastEpisodeRequest;
import org.openapis.openapi.models.operations.CreatePodcastEpisodeRequestBody;
import org.openapis.openapi.models.operations.CreatePodcastEpisodeRequestBodyFileLogo;
import org.openapis.openapi.models.operations.CreatePodcastEpisodeRequestBodyFileMedia;
import org.openapis.openapi.models.operations.CreatePodcastEpisodeResponse;
import org.openapis.openapi.models.shared.PodcastEpisode;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePodcastEpisodeRequest req = new CreatePodcastEpisodeRequest("officia") {{
                requestBody = new CreatePodcastEpisodeRequestBody(                new PodcastEpisode("occaecati", OffsetDateTime.parse("2022-06-18T20:36:37.412Z"), "hic", "optio") {{
                                    author = "totam";
                                    block = false;
                                    duration = 105907L;
                                    episode = 414662L;
                                    episodeType = "molestiae";
                                    explicit = false;
                                    fileUrl = "modi";
                                    image = "qui";
                                    key = "impedit";
                                    link = "cum";
                                    season = 456150L;
                                    size = 216550L;
                                    subtitle = "excepturi";
                                    tags = new String[]{{
                                        add("perferendis"),
                                    }};
                                }};,                 new CreatePodcastEpisodeRequestBodyFileLogo("ad".getBytes(), "natus");,                 new CreatePodcastEpisodeRequestBodyFileMedia("sed".getBytes(), "iste"););;
            }};            

            CreatePodcastEpisodeResponse res = sdk.apiV2.createPodcastEpisode(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePodcast

Delete podcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePodcastRequest;
import org.openapis.openapi.models.operations.DeletePodcastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePodcastRequest req = new DeletePodcastRequest("natus");            

            DeletePodcastResponse res = sdk.apiV2.deletePodcast(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePodcast1

Delete podcast episode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePodcast1Request;
import org.openapis.openapi.models.operations.DeletePodcast1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePodcast1Request req = new DeletePodcast1Request("hic", "saepe");            

            DeletePodcast1Response res = sdk.apiV2.deletePodcast1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPartnerAggregatorStations

List stations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPartnerAggregatorStationsRequest;
import org.openapis.openapi.models.operations.GetPartnerAggregatorStationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPartnerAggregatorStationsRequest req = new GetPartnerAggregatorStationsRequest() {{
                hitsPerPage = "in";
                page = "corporis";
            }};            

            GetPartnerAggregatorStationsResponse res = sdk.apiV2.getPartnerAggregatorStations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcast

Get podcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastRequest;
import org.openapis.openapi.models.operations.GetPodcastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastRequest req = new GetPodcastRequest("iure");            

            GetPodcastResponse res = sdk.apiV2.getPodcast(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastCategories

Get the list of Categories that can be used to filter podcasts in the search podcasts request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastCategoriesResponse res = sdk.apiV2.getPodcastCategories();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastCountries

Get the list of Countries that can be used to filter podcasts in the search podcasts request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastCountriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastCountriesResponse res = sdk.apiV2.getPodcastCountries();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastEpisode

Get podcast episode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastEpisodeRequest;
import org.openapis.openapi.models.operations.GetPodcastEpisodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastEpisodeRequest req = new GetPodcastEpisodeRequest("ipsa", "reiciendis");            

            GetPodcastEpisodeResponse res = sdk.apiV2.getPodcastEpisode(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastEpisodes

Get podcast episodes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastEpisodesRequest;
import org.openapis.openapi.models.operations.GetPodcastEpisodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastEpisodesRequest req = new GetPodcastEpisodesRequest("mollitia") {{
                limit = "laborum";
                offset = "dolores";
            }};            

            GetPodcastEpisodesResponse res = sdk.apiV2.getPodcastEpisodes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastLanguages

Get the list of Languages that can be used to filter podcasts in the search podcasts request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastLanguagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastLanguagesResponse res = sdk.apiV2.getPodcastLanguages();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStationCountries

Get the list of Countries that can be used to filter stations in the search stations request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStationCountriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStationCountriesResponse res = sdk.apiV2.getStationCountries();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStationGenres

Get the list of Genres that can be used to filter stations in the search stations request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStationGenresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStationGenresResponse res = sdk.apiV2.getStationGenres();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStationLanguages

Get the list of Languages that can be used to filter stations in the search stations request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStationLanguagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStationLanguagesResponse res = sdk.apiV2.getStationLanguages();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPodcasts

Search podcasts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPodcastsResponse;
import org.openapis.openapi.models.shared.PodcastFilters;
import org.openapis.openapi.models.shared.PodcastFiltersPodcastTypeEnum;
import org.openapis.openapi.models.shared.PodcastSearchParams;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PodcastSearchParams req = new PodcastSearchParams() {{
                filters = new PodcastFilters() {{
                    category = new String[]{{
                        add("nemo"),
                        add("minima"),
                        add("excepturi"),
                    }};
                    country = new String[]{{
                        add("iure"),
                    }};
                    language = new String[]{{
                        add("doloribus"),
                        add("sapiente"),
                        add("architecto"),
                    }};
                    podcastType = PodcastFiltersPodcastTypeEnum.SHOWS;
                }};;
                hitsPerPage = 208876;
                page = 635059;
                query = "consequuntur";
            }};            

            SearchPodcastsResponse res = sdk.apiV2.searchPodcasts(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchStations

Search stations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchStationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StationFilters;
import org.openapis.openapi.models.shared.StationSearchParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.StationSearchParams req = new StationSearchParams() {{
                filters = new StationFilters() {{
                    country = new String[]{{
                        add("occaecati"),
                        add("numquam"),
                        add("commodi"),
                    }};
                    genre = new String[]{{
                        add("molestiae"),
                        add("velit"),
                    }};
                    language = new String[]{{
                        add("quia"),
                        add("quis"),
                        add("vitae"),
                    }};
                }};;
                hitsPerPage = 674752;
                page = 656330;
                query = "enim";
            }};            

            SearchStationsResponse res = sdk.apiV2.searchStations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePodcast

Update podcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePodcastRequest;
import org.openapis.openapi.models.operations.UpdatePodcastRequestBody;
import org.openapis.openapi.models.operations.UpdatePodcastRequestBodyFileLogo;
import org.openapis.openapi.models.operations.UpdatePodcastResponse;
import org.openapis.openapi.models.shared.Podcast;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePodcastRequest req = new UpdatePodcastRequest("quo") {{
                requestBody = new UpdatePodcastRequestBody(                new Podcast(                new String[]{{
                                                    add("tenetur"),
                                                }}, "ipsam", "id", "possimus", "aut") {{
                                    author = "quasi";
                                    block = false;
                                    copyright = "error";
                                    country = "Sri Lanka";
                                    explicit = false;
                                    image = "laborum";
                                    key = "quasi";
                                    keywords = new String[]{{
                                        add("voluptatibus"),
                                        add("vero"),
                                        add("nihil"),
                                        add("praesentium"),
                                    }};
                                    link = "voluptatibus";
                                    ownerEmail = "ipsa";
                                    ownerName = "omnis";
                                    showType = "voluptate";
                                    subtitle = "cum";
                                }};) {{
                    fileLogo = new UpdatePodcastRequestBodyFileLogo("perferendis".getBytes(), "doloremque");;
                }};;
            }};            

            UpdatePodcastResponse res = sdk.apiV2.updatePodcast(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePodcastEpisode

Update podcast episode

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePodcastEpisodeRequest;
import org.openapis.openapi.models.operations.UpdatePodcastEpisodeRequestBody;
import org.openapis.openapi.models.operations.UpdatePodcastEpisodeRequestBodyFileLogo;
import org.openapis.openapi.models.operations.UpdatePodcastEpisodeResponse;
import org.openapis.openapi.models.shared.PodcastEpisode;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePodcastEpisodeRequest req = new UpdatePodcastEpisodeRequest("ut", "maiores") {{
                requestBody = new UpdatePodcastEpisodeRequestBody(                new PodcastEpisode("dicta", OffsetDateTime.parse("2022-09-14T21:48:41.971Z"), "iusto", "dicta") {{
                                    author = "harum";
                                    block = false;
                                    duration = 317983L;
                                    episode = 880476L;
                                    episodeType = "commodi";
                                    explicit = false;
                                    fileUrl = "repudiandae";
                                    image = "quae";
                                    key = "ipsum";
                                    link = "quidem";
                                    season = 565189L;
                                    size = 566602L;
                                    subtitle = "pariatur";
                                    tags = new String[]{{
                                        add("praesentium"),
                                        add("rem"),
                                    }};
                                }};) {{
                    fileLogo = new UpdatePodcastEpisodeRequestBodyFileLogo("voluptates".getBytes(), "quasi");;
                }};;
            }};            

            UpdatePodcastEpisodeResponse res = sdk.apiV2.updatePodcastEpisode(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
