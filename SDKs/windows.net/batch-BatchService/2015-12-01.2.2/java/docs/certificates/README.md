# certificates

### Available Operations

* [certificateAdd](#certificateadd) - Adds a certificate to the specified account.
* [certificateCancelDeletion](#certificatecanceldeletion) - Cancels a failed deletion of a certificate from the specified account.
* [certificateDelete](#certificatedelete) - Deletes a certificate from the specified account.
* [certificateGet](#certificateget) - Gets information about the specified certificate.
* [certificateList](#certificatelist) - Lists all of the certificates that have been added to the specified account.

## certificateAdd

Adds a certificate to the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateAddRequest;
import org.openapis.openapi.models.operations.CertificateAddResponse;
import org.openapis.openapi.models.shared.CertificateAddParameter;
import org.openapis.openapi.models.shared.CertificateAddParameterCertificateFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateAddRequest req = new CertificateAddRequest(                new CertificateAddParameter("ipsa", "delectus", "tempora") {{
                                certificateFormat = CertificateAddParameterCertificateFormatEnum.CER;
                                password = "molestiae";
                            }};, "minus") {{
                clientRequestId = "placeat";
                ocpDate = "voluptatum";
                returnClientRequestId = false;
                timeout = 479977;
            }};            

            CertificateAddResponse res = sdk.certificates.certificateAdd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateCancelDeletion

Cancels a failed deletion of a certificate from the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateCancelDeletionRequest;
import org.openapis.openapi.models.operations.CertificateCancelDeletionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateCancelDeletionRequest req = new CertificateCancelDeletionRequest("excepturi", "nisi", "recusandae") {{
                clientRequestId = "temporibus";
                ocpDate = "ab";
                returnClientRequestId = false;
                timeout = 337396;
            }};            

            CertificateCancelDeletionResponse res = sdk.certificates.certificateCancelDeletion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateDelete

Deletes a certificate from the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateDeleteRequest;
import org.openapis.openapi.models.operations.CertificateDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateDeleteRequest req = new CertificateDeleteRequest("veritatis", "deserunt", "perferendis") {{
                clientRequestId = "ipsam";
                ocpDate = "repellendus";
                returnClientRequestId = false;
                timeout = 957156;
            }};            

            CertificateDeleteResponse res = sdk.certificates.certificateDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateGet

Gets information about the specified certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateGetRequest;
import org.openapis.openapi.models.operations.CertificateGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateGetRequest req = new CertificateGetRequest("quo", "odit", "at") {{
                dollarSelect = "at";
                clientRequestId = "maiores";
                ocpDate = "molestiae";
                returnClientRequestId = false;
                timeout = 799159;
            }};            

            CertificateGetResponse res = sdk.certificates.certificateGet(req);

            if (res.certificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateList

Lists all of the certificates that have been added to the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateListRequest;
import org.openapis.openapi.models.operations.CertificateListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateListRequest req = new CertificateListRequest("quod") {{
                dollarFilter = "esse";
                dollarSelect = "totam";
                clientRequestId = "porro";
                maxresults = 678880;
                ocpDate = "dicta";
                returnClientRequestId = false;
                timeout = 720633;
            }};            

            CertificateListResponse res = sdk.certificates.certificateList(req);

            if (res.certificateListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
