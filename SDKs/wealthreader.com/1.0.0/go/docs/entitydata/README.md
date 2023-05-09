# EntityData

## Overview

Métodos utilizados para recuperar información de las entidades

### Available Operations

* [GetEntities](#getentities) - Obtiene el listado de entidades soportadas
* [GetErrorCodes](#geterrorcodes) - Listado de códigos de error
* [PostEntities](#postentities) - Obtiene los activos financieros y el detalle de su composición

## GetEntities

Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EntityData.GetEntities(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Entities != nil {
        // handle response
    }
}
```

## GetErrorCodes

Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EntityData.GetErrorCodes(ctx, operations.GetErrorCodesRequest{
        Lang: operations.GetErrorCodesLangEnumEn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorCodes != nil {
        // handle response
    }
}
```

## PostEntities

Obtiene los activos financieros y el detalle de su composición de carteras de inversión compuestas por acciones o fondos, tarjetas de crédito, seguros y préstamos. Incluye información de titularidad de cada uno de los activos así como identificadores únicos que facilitan el tratamiento del dato. Es posible obtener datos Mock. Consulte con el equipo técnico cómo hacerlo.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EntityData.PostEntities(ctx, operations.PostEntitiesRequestBody{
        Otp: sdk.String("provident"),
        Session: sdk.String("distinctio"),
        APIKey: sdk.String("quibusdam"),
        Code: sdk.String("unde"),
        ContractCode: sdk.String("nulla"),
        DocumentType: operations.PostEntitiesRequestBodyDocumentTypeEnumNif.ToPointer(),
        Password: sdk.String("corrupti"),
        SecondPassword: sdk.String("illum"),
        Token: sdk.String("vel"),
        Tokenize: sdk.Bool(false),
        User: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EntityData != nil {
        // handle response
    }
}
```
