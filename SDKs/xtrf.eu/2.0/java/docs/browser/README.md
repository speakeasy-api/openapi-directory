# browser

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [browseCSV](#browsecsv) - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* [browseJSON](#browsejson) - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* [create](#create) - Creates view for given class.
* [delete](#delete) - Removes a view.
* [deleteColumn](#deletecolumn) - Deletes a single column from view.
* [get](#get) - Returns all view's information.
* [getColumnSettings](#getcolumnsettings) - Returns column's specific settings.
* [getColumns](#getcolumns) - Returns columns defined in view.
* [getCurrentViewDetails](#getcurrentviewdetails) - Returns current view's detailed information, suitable for browser.
* [getFilter](#getfilter) - Returns view's filter.
* [getLocalSettings](#getlocalsettings) - Returns view's local settings (for current user).
* [getOrder](#getorder) - Returns view's order settings.
* [getPermissions](#getpermissions) - Returns view's permissions.
* [getSettings](#getsettings) - Returns view's settings.
* [getViewDetails](#getviewdetails) - Returns view's detailed information, suitable for browser.
* [getViewsBrief](#getviewsbrief) - Returns views' brief.
* [selectViewAndGetItsDetails](#selectviewandgetitsdetails) - Selects given view as current and returns its detailed information, suitable for browser.
* [update](#update) - Updates all view's information.
* [updateColumnSettings](#updatecolumnsettings) - Updates column's specific settings.
* [updateColumns](#updatecolumns) - Updates columns in view.
* [updateFilter](#updatefilter) - Updates view's filter.
* [updateFilterProperty](#updatefilterproperty) - Updates view's filter property.
* [updateLocalSettings](#updatelocalsettings) - Updates view's local settings (for current user).
* [updateOrder](#updateorder) - Updates view's order settings.
* [updatePermissions](#updatepermissions) - Updates view's permissions.
* [updateSettings](#updatesettings) - Updates view's settings.

## browseCSV

Searches for data (ie. customer, task, etc) and returns it in a CSV form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseCSVRequest;
import org.openapis.openapi.models.operations.BrowseCSVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            BrowseCSVRequest req = new BrowseCSVRequest() {{
                additionalOrder = "unde";
                secondarySeparator = "nulla";
                separator = "corrupti";
                viewId = 847252L;
            }};            

            BrowseCSVResponse res = sdk.browser.browseCSV(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## browseJSON

Searches for data (ie. customer, task, etc) and returns it in a tabular form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseJSONRequest;
import org.openapis.openapi.models.operations.BrowseJSONResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            BrowseJSONRequest req = new BrowseJSONRequest() {{
                additionalOrder = "vel";
                maxRows = 623564;
                page = 645894;
                useDeferredColumns = "suscipit";
                viewId = 437587L;
            }};            

            BrowseJSONResponse res = sdk.browser.browseJSON(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create

Creates view for given class.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRequest;
import org.openapis.openapi.models.operations.CreateResponse;
import org.openapis.openapi.models.shared.ColumnDTO;
import org.openapis.openapi.models.shared.LocalSettingsDTO;
import org.openapis.openapi.models.shared.OrderDTO;
import org.openapis.openapi.models.shared.PermissionsDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingsDTO;
import org.openapis.openapi.models.shared.ViewDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRequest req = new CreateRequest(                new ViewDTO() {{
                                columns = new org.openapis.openapi.models.shared.ColumnDTO[]{{
                                    add(new ColumnDTO() {{
                                        name = "Larry Windler";
                                        settings = new java.util.HashMap<String, Object>() {{
                                            put("minus", "placeat");
                                            put("voluptatum", "iusto");
                                        }};
                                    }}),
                                    add(new ColumnDTO() {{
                                        name = "Charlie Walsh II";
                                        settings = new java.util.HashMap<String, Object>() {{
                                            put("deserunt", "perferendis");
                                        }};
                                    }}),
                                }};
                                order = new OrderDTO() {{
                                    column = "ipsam";
                                    type = "repellendus";
                                }};;
                                permissions = new PermissionsDTO() {{
                                    sharedGroups = new Long[]{{
                                        add(778157L),
                                        add(140350L),
                                        add(870013L),
                                        add(870088L),
                                    }};
                                }};;
                                settings = new SettingsDTO() {{
                                    local = new LocalSettingsDTO() {{
                                        maxLinesInRow = 978619;
                                        maxRows = 473608;
                                    }};;
                                    name = "Forrest Koepp";
                                }};;
                            }};, "dolorum");            

            CreateResponse res = sdk.browser.create(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete

Removes a view. No content is returned upon success (204).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequest;
import org.openapis.openapi.models.operations.DeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRequest req = new DeleteRequest(118274L);            

            DeleteResponse res = sdk.browser.delete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteColumn

Deletes a single column from view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteColumnRequest;
import org.openapis.openapi.models.operations.DeleteColumnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteColumnRequest req = new DeleteColumnRequest("nam", 639921L);            

            DeleteColumnResponse res = sdk.browser.deleteColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## get

Returns all view's information (ie. name, columns, filters, etc).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRequest req = new GetRequest(582020L);            

            GetResponse res = sdk.browser.get(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getColumnSettings

Returns column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetColumnSettingsRequest;
import org.openapis.openapi.models.operations.GetColumnSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetColumnSettingsRequest req = new GetColumnSettingsRequest("fugit", 537373L);            

            GetColumnSettingsResponse res = sdk.browser.getColumnSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getColumns

Returns columns defined in view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetColumnsRequest;
import org.openapis.openapi.models.operations.GetColumnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetColumnsRequest req = new GetColumnsRequest(944669L);            

            GetColumnsResponse res = sdk.browser.getColumns(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCurrentViewDetails

Returns current view's detailed information, suitable for browser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrentViewDetailsRequest;
import org.openapis.openapi.models.operations.GetCurrentViewDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCurrentViewDetailsRequest req = new GetCurrentViewDetailsRequest("optio") {{
                placeName = "totam";
            }};            

            GetCurrentViewDetailsResponse res = sdk.browser.getCurrentViewDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilter

Returns view's filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilterRequest;
import org.openapis.openapi.models.operations.GetFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFilterRequest req = new GetFilterRequest(105907L);            

            GetFilterResponse res = sdk.browser.getFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocalSettings

Returns view's local settings (for current user).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocalSettingsRequest;
import org.openapis.openapi.models.operations.GetLocalSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLocalSettingsRequest req = new GetLocalSettingsRequest(414662L);            

            GetLocalSettingsResponse res = sdk.browser.getLocalSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrder

Returns view's order settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrderRequest req = new GetOrderRequest(473600L);            

            GetOrderResponse res = sdk.browser.getOrder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissions

Returns view's permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionsRequest;
import org.openapis.openapi.models.operations.GetPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPermissionsRequest req = new GetPermissionsRequest(264555L);            

            GetPermissionsResponse res = sdk.browser.getPermissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettings

Returns view's settings (ie. name).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsRequest;
import org.openapis.openapi.models.operations.GetSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSettingsRequest req = new GetSettingsRequest(186332L);            

            GetSettingsResponse res = sdk.browser.getSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getViewDetails

Returns view's detailed information, suitable for browser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetViewDetailsRequest;
import org.openapis.openapi.models.operations.GetViewDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetViewDetailsRequest req = new GetViewDetailsRequest("impedit", 736918L) {{
                placeName = "esse";
            }};            

            GetViewDetailsResponse res = sdk.browser.getViewDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getViewsBrief

Returns views' brief.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetViewsBriefRequest;
import org.openapis.openapi.models.operations.GetViewsBriefResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetViewsBriefRequest req = new GetViewsBriefRequest("ipsum") {{
                placeName = "excepturi";
            }};            

            GetViewsBriefResponse res = sdk.browser.getViewsBrief(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## selectViewAndGetItsDetails

Selects given view as current and returns its detailed information, suitable for browser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SelectViewAndGetItsDetailsRequest;
import org.openapis.openapi.models.operations.SelectViewAndGetItsDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SelectViewAndGetItsDetailsRequest req = new SelectViewAndGetItsDetailsRequest("aspernatur", 18789L) {{
                placeNameDenotesSpecificPlaceInSystemWithTheTable = "ad";
            }};            

            SelectViewAndGetItsDetailsResponse res = sdk.browser.selectViewAndGetItsDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update

Updates all view's information (ie. name, columns, filters, etc).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRequest;
import org.openapis.openapi.models.operations.UpdateResponse;
import org.openapis.openapi.models.shared.ColumnDTO;
import org.openapis.openapi.models.shared.LocalSettingsDTO;
import org.openapis.openapi.models.shared.OrderDTO;
import org.openapis.openapi.models.shared.PermissionsDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingsDTO;
import org.openapis.openapi.models.shared.ViewDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRequest req = new UpdateRequest(                new ViewDTO() {{
                                columns = new org.openapis.openapi.models.shared.ColumnDTO[]{{
                                    add(new ColumnDTO() {{
                                        name = "Sheryl Fadel";
                                        settings = new java.util.HashMap<String, Object>() {{
                                            put("saepe", "fuga");
                                            put("in", "corporis");
                                            put("iste", "iure");
                                            put("saepe", "quidem");
                                        }};
                                    }}),
                                    add(new ColumnDTO() {{
                                        name = "Brenda Wisozk";
                                        settings = new java.util.HashMap<String, Object>() {{
                                            put("dolores", "dolorem");
                                            put("corporis", "explicabo");
                                            put("nobis", "enim");
                                        }};
                                    }}),
                                    add(new ColumnDTO() {{
                                        name = "Corey Hane III";
                                        settings = new java.util.HashMap<String, Object>() {{
                                            put("doloribus", "sapiente");
                                            put("architecto", "mollitia");
                                            put("dolorem", "culpa");
                                        }};
                                    }}),
                                }};
                                order = new OrderDTO() {{
                                    column = "consequuntur";
                                    type = "repellat";
                                }};;
                                permissions = new PermissionsDTO() {{
                                    sharedGroups = new Long[]{{
                                        add(581850L),
                                        add(253291L),
                                        add(414369L),
                                    }};
                                }};;
                                settings = new SettingsDTO() {{
                                    local = new LocalSettingsDTO() {{
                                        maxLinesInRow = 466311;
                                        maxRows = 474697;
                                    }};;
                                    name = "Sabrina Cronin MD";
                                }};;
                            }};, 656330L);            

            UpdateResponse res = sdk.browser.update(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateColumnSettings

Updates column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateColumnSettingsRequest;
import org.openapis.openapi.models.operations.UpdateColumnSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateColumnSettingsRequest req = new UpdateColumnSettingsRequest(                new java.util.HashMap<String, Object>() {{
                                put("odit", "quo");
                                put("sequi", "tenetur");
                            }}, "ipsam", 662527L);            

            UpdateColumnSettingsResponse res = sdk.browser.updateColumnSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateColumns

Updates columns in view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateColumnsRequest;
import org.openapis.openapi.models.operations.UpdateColumnsResponse;
import org.openapis.openapi.models.shared.ColumnDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateColumnsRequest req = new UpdateColumnsRequest(                new org.openapis.openapi.models.shared.ColumnDTO[]{{
                                add(new ColumnDTO() {{
                                    name = "Joyce Mueller";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("reiciendis", "voluptatibus");
                                    }};
                                }}),
                                add(new ColumnDTO() {{
                                    name = "Jessie Langosh V";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("cum", "perferendis");
                                        put("doloremque", "reprehenderit");
                                    }};
                                }}),
                                add(new ColumnDTO() {{
                                    name = "Shawna Carter";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("dicta", "harum");
                                        put("enim", "accusamus");
                                    }};
                                }}),
                                add(new ColumnDTO() {{
                                    name = "Elvira Bergnaum";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("excepturi", "pariatur");
                                        put("modi", "praesentium");
                                        put("rem", "voluptates");
                                    }};
                                }}),
                            }}, 93940L);            

            UpdateColumnsResponse res = sdk.browser.updateColumns(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFilter

Updates view's filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFilterRequest;
import org.openapis.openapi.models.operations.UpdateFilterResponse;
import org.openapis.openapi.models.shared.FilterPropertyDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFilterRequest req = new UpdateFilterRequest(                new org.openapis.openapi.models.shared.FilterPropertyDTO[]{{
                                add(new FilterPropertyDTO() {{
                                    name = "Patrick Ward";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("est", "quibusdam");
                                    }};
                                    settingsPresent = false;
                                    type = "explicabo";
                                }}),
                                add(new FilterPropertyDTO() {{
                                    name = "Rudy Spencer";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("aliquid", "cupiditate");
                                    }};
                                    settingsPresent = false;
                                    type = "quos";
                                }}),
                                add(new FilterPropertyDTO() {{
                                    name = "Louise Simonis Sr.";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("excepturi", "tempora");
                                        put("facilis", "tempore");
                                        put("labore", "delectus");
                                    }};
                                    settingsPresent = false;
                                    type = "eum";
                                }}),
                                add(new FilterPropertyDTO() {{
                                    name = "Sheri Mayer";
                                    settings = new java.util.HashMap<String, Object>() {{
                                        put("sint", "officia");
                                        put("dolor", "debitis");
                                        put("a", "dolorum");
                                        put("in", "in");
                                    }};
                                    settingsPresent = false;
                                    type = "illum";
                                }}),
                            }}, 978571L);            

            UpdateFilterResponse res = sdk.browser.updateFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFilterProperty

Updates view's filter property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFilterPropertyRequest;
import org.openapis.openapi.models.operations.UpdateFilterPropertyResponse;
import org.openapis.openapi.models.shared.FilterPropertyDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFilterPropertyRequest req = new UpdateFilterPropertyRequest(                new FilterPropertyDTO() {{
                                name = "Keith Gulgowski";
                                settings = new java.util.HashMap<String, Object>() {{
                                    put("aliquid", "laborum");
                                    put("accusamus", "non");
                                }};
                                settingsPresent = false;
                                type = "occaecati";
                            }};, "enim", 881736L);            

            UpdateFilterPropertyResponse res = sdk.browser.updateFilterProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocalSettings

Updates view's local settings (for current user).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocalSettingsRequest;
import org.openapis.openapi.models.operations.UpdateLocalSettingsResponse;
import org.openapis.openapi.models.shared.LocalSettingsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocalSettingsRequest req = new UpdateLocalSettingsRequest(                new LocalSettingsDTO() {{
                                maxLinesInRow = 965417;
                                maxRows = 692532;
                            }};, 588465L);            

            UpdateLocalSettingsResponse res = sdk.browser.updateLocalSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrder

Updates view's order settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrderRequest;
import org.openapis.openapi.models.operations.UpdateOrderResponse;
import org.openapis.openapi.models.shared.OrderDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrderRequest req = new UpdateOrderRequest(                new OrderDTO() {{
                                column = "nam";
                                type = "id";
                            }};, 501324L);            

            UpdateOrderResponse res = sdk.browser.updateOrder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePermissions

Updates view's permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePermissionsRequest;
import org.openapis.openapi.models.operations.UpdatePermissionsResponse;
import org.openapis.openapi.models.shared.PermissionsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePermissionsRequest req = new UpdatePermissionsRequest(                new PermissionsDTO() {{
                                sharedGroups = new Long[]{{
                                    add(956084L),
                                    add(230533L),
                                    add(643990L),
                                }};
                            }};, 394869L);            

            UpdatePermissionsResponse res = sdk.browser.updatePermissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSettings

Updates view's settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSettingsRequest;
import org.openapis.openapi.models.operations.UpdateSettingsResponse;
import org.openapis.openapi.models.shared.LocalSettingsDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingsDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSettingsRequest req = new UpdateSettingsRequest(                new SettingsDTO() {{
                                local = new LocalSettingsDTO() {{
                                    maxLinesInRow = 423855;
                                    maxRows = 618809;
                                }};;
                                name = "Fernando Aufderhar";
                            }};, 716075L);            

            UpdateSettingsResponse res = sdk.browser.updateSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
