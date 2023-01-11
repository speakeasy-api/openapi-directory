import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProxyCreateExportFormatEnum {
    Csv = "csv",
    Html = "html",
    Excel = "Excel"
}


export class ProxyCreateExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConvertToCurrencies" })
  convertToCurrencies?: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: ProxyCreateExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Zip" })
  zip?: boolean;
}
