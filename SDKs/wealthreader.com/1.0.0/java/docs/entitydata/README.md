# entityData

## Overview

Métodos utilizados para recuperar información de las entidades

### Available Operations

* [getEntities](#getentities) - Obtiene el listado de entidades soportadas
* [getErrorCodes](#geterrorcodes) - Listado de códigos de error
* [postEntities](#postentities) - Obtiene los activos financieros y el detalle de su composición

## getEntities

Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitiesResponse res = sdk.entityData.getEntities();

            if (res.entities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getErrorCodes

Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetErrorCodesLangEnum;
import org.openapis.openapi.models.operations.GetErrorCodesRequest;
import org.openapis.openapi.models.operations.GetErrorCodesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetErrorCodesRequest req = new GetErrorCodesRequest() {{
                lang = GetErrorCodesLangEnum.EN;
            }};            

            GetErrorCodesResponse res = sdk.entityData.getErrorCodes(req);

            if (res.errorCodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEntities

Obtiene los activos financieros y el detalle de su composición de carteras de inversión compuestas por acciones o fondos, tarjetas de crédito, seguros y préstamos. Incluye información de titularidad de cada uno de los activos así como identificadores únicos que facilitan el tratamiento del dato. Es posible obtener datos Mock. Consulte con el equipo técnico cómo hacerlo.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEntitiesRequestBody;
import org.openapis.openapi.models.operations.PostEntitiesRequestBodyDocumentTypeEnum;
import org.openapis.openapi.models.operations.PostEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEntitiesRequestBody req = new PostEntitiesRequestBody() {{
                otp = "provident";
                session = "distinctio";
                apiKey = "quibusdam";
                code = "unde";
                contractCode = "nulla";
                documentType = PostEntitiesRequestBodyDocumentTypeEnum.NIF;
                password = "corrupti";
                secondPassword = "illum";
                token = "vel";
                tokenize = false;
                user = "error";
            }};            

            PostEntitiesResponse res = sdk.entityData.postEntities(req);

            if (res.entityData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
