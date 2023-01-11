import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetCustomExchangeRatesDataType } from "./getcustomexchangeratesdatatype";



export class GetCustomExchangeRatesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inverse" })
  inverse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rates", elemType: GetCustomExchangeRatesDataType })
  rates?: GetCustomExchangeRatesDataType[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
