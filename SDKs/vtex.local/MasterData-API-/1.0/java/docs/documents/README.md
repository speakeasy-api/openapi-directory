# documents

## Overview

The APIs within this group are used to save documents and query them by id.

If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.

Another important note: The id field will only be considered on the **POST** verb if the ID type entered in the Data Entity is the option:

```
A chave primária será informada pelo cliente através do atributo 'id'
```

Otherwise, a new document will always be created.

### Response status code

1. Status Code 201: Document created successfully
2. Status Code 200: Document changed successfully
3. Status Code 304: There were no changes to the document
4. Status Code 400: Invalid information in JSON
5. Status Code 403: Unauthorized access


### Available Operations

* [createnewdocument](#createnewdocument) - Create new document
* [createorupdateentiredocument](#createorupdateentiredocument) - Create or update entire document
* [createorupdatepartialdocument](#createorupdatepartialdocument) - Create or update partial document
* [deletedocument](#deletedocument) - Delete document
* [getdocument](#getdocument) - Get document
* [updateentiredocument](#updateentiredocument) - Update entire document
* [updatepartialdocument](#updatepartialdocument) - Update partial document

## createnewdocument

Creates documents through a JSON object where the key is the name of the field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatenewdocumentRequest;
import org.openapis.openapi.models.operations.CreatenewdocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "at") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatenewdocumentRequest req = new CreatenewdocumentRequest("at",                 new java.util.HashMap<String, Object>() {{
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }}, "nam");            

            CreatenewdocumentResponse res = sdk.documents.createnewdocument(req);

            if (res.createnewdocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createorupdateentiredocument

Create or update entire document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateorupdateentiredocumentRequest;
import org.openapis.openapi.models.operations.CreateorupdateentiredocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "occaecati") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateorupdateentiredocumentRequest req = new CreateorupdateentiredocumentRequest("fugit",                 new java.util.HashMap<String, Object>() {{
                                put("hic", "optio");
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                            }}, "modi");            

            CreateorupdateentiredocumentResponse res = sdk.documents.createorupdateentiredocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createorupdatepartialdocument

Create or update partial document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateorupdatepartialdocumentRequest;
import org.openapis.openapi.models.operations.CreateorupdatepartialdocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "impedit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateorupdatepartialdocumentRequest req = new CreateorupdatepartialdocumentRequest("cum",                 new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }}, "ad");            

            CreateorupdatepartialdocumentResponse res = sdk.documents.createorupdatepartialdocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletedocument

It allows to delete a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletedocumentRequest;
import org.openapis.openapi.models.operations.DeletedocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "sed") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletedocumentRequest req = new DeletedocumentRequest("iste", "dolor", "natus", "laboriosam");            

            DeletedocumentResponse res = sdk.documents.deletedocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getdocument

Retrieves a document.

Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetdocumentRequest;
import org.openapis.openapi.models.operations.GetdocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "saepe") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetdocumentRequest req = new GetdocumentRequest("fuga", "in", "corporis", "iste");            

            GetdocumentResponse res = sdk.documents.getdocument(req);

            if (res.usingfilters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateentiredocument

Update entire document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateentiredocumentRequest;
import org.openapis.openapi.models.operations.UpdateentiredocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "saepe") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateentiredocumentRequest req = new UpdateentiredocumentRequest("quidem",                 new java.util.HashMap<String, Object>() {{
                                put("ipsa", "reiciendis");
                            }}, "est", "mollitia");            

            UpdateentiredocumentResponse res = sdk.documents.updateentiredocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatepartialdocument

Update partial document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatepartialdocumentRequest;
import org.openapis.openapi.models.operations.UpdatepartialdocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "dolores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatepartialdocumentRequest req = new UpdatepartialdocumentRequest("dolorem",                 new java.util.HashMap<String, Object>() {{
                                put("explicabo", "nobis");
                                put("enim", "omnis");
                            }}, "nemo", "minima");            

            UpdatepartialdocumentResponse res = sdk.documents.updatepartialdocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
