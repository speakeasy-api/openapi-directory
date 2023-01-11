import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateInventoryForAnItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku: string;
}


export class UpdateInventoryForAnItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmCONSUMERCHANNELTYPE: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQOSCORRELATIONID: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSECACCESSTOKEN: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSVCNAME: string;
}

export enum UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}


export class UpdateInventoryForAnItemApplicationJsonQuantity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum;
}


export class UpdateInventoryForAnItemApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: UpdateInventoryForAnItemApplicationJsonQuantity;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class UpdateInventoryForAnItemRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateInventoryForAnItemApplicationJson;
}

export enum UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}


export class UpdateInventoryForAnItem200ApplicationJsonQuantity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum;
}


export class UpdateInventoryForAnItem200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: UpdateInventoryForAnItem200ApplicationJsonQuantity;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class UpdateInventoryForAnItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateInventoryForAnItemQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateInventoryForAnItemHeaders;

  @SpeakeasyMetadata()
  request: UpdateInventoryForAnItemRequests;
}


export class UpdateInventoryForAnItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateInventoryForAnItem200ApplicationJSONObject?: UpdateInventoryForAnItem200ApplicationJson;
}
