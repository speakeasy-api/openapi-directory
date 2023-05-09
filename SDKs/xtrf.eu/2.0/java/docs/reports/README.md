# reports

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [delete11](#delete11) - Removes a report.
* [duplicate1](#duplicate1) - Duplicates a report.
* [exportToXML](#exporttoxml) - Exports reports definition to XML.
* [generateCSV](#generatecsv) - Generates CSV content for a report.
* [generatePrinterFriendly](#generateprinterfriendly) - Generates printer friendly content for a report.
* [importFromXML](#importfromxml) - Imports reports definition from XML.
* [setPreferred](#setpreferred) - Marks report as preferred or not.

## delete11

Removes a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete11Request;
import org.openapis.openapi.models.operations.Delete11Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete11Request req = new Delete11Request(2064L);            

            Delete11Response res = sdk.reports.delete11(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## duplicate1

Duplicates a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Duplicate1Request;
import org.openapis.openapi.models.operations.Duplicate1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Duplicate1Request req = new Duplicate1Request(695947L);            

            Duplicate1Response res = sdk.reports.duplicate1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportToXML

Exports reports definition to XML.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportToXMLResponse;
import org.openapis.openapi.models.shared.ExportRequestDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ExportRequestDTO req = new ExportRequestDTO() {{
                ids = new Long[]{{
                    add(412433L),
                }};
            }};            

            ExportToXMLResponse res = sdk.reports.exportToXML(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateCSV

Generates CSV content for a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateCSVRequest;
import org.openapis.openapi.models.operations.GenerateCSVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateCSVRequest req = new GenerateCSVRequest(956124L);            

            GenerateCSVResponse res = sdk.reports.generateCSV(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generatePrinterFriendly

Generates printer friendly content for a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneratePrinterFriendlyRequest;
import org.openapis.openapi.models.operations.GeneratePrinterFriendlyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GeneratePrinterFriendlyRequest req = new GeneratePrinterFriendlyRequest(164319L);            

            GeneratePrinterFriendlyResponse res = sdk.reports.generatePrinterFriendly(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importFromXML

Imports a report definition from an XML using a file token. To obtain the token, you first need to upload a temporary XML file, as specified in the Files section. Note that the name of the imported report must be unique.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportFromXMLResponse;
import org.openapis.openapi.models.shared.ImportRequestDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ImportRequestDTO req = new ImportRequestDTO() {{
                fileToken = "veniam";
            }};            

            ImportFromXMLResponse res = sdk.reports.importFromXML(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPreferred

Marks report as preferred or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPreferredRequest;
import org.openapis.openapi.models.operations.SetPreferredResponse;
import org.openapis.openapi.models.shared.PreferredRequestDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetPreferredRequest req = new SetPreferredRequest(                new PreferredRequestDTO() {{
                                preferred = false;
                            }};, 893773L);            

            SetPreferredResponse res = sdk.reports.setPreferred(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
