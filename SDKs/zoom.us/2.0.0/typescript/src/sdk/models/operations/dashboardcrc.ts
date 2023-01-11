import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardCrcQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardCrcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: string;

  @SpeakeasyMetadata({ data: "json, name=max_usage" })
  maxUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=total_usage" })
  totalUsage?: number;
}


export class DashboardCrc200ApplicationJsonCrcPortsUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crc_ports_hour_usage", elemType: DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage })
  crcPortsHourUsage?: DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage[];

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;
}


export class DashboardCrc200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crc_ports_usage", elemType: DashboardCrc200ApplicationJsonCrcPortsUsage })
  crcPortsUsage?: DashboardCrc200ApplicationJsonCrcPortsUsage[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}


export class DashboardCrcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardCrcQueryParams;

  @SpeakeasyMetadata()
  security: DashboardCrcSecurity;
}


export class DashboardCrcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardCRC200ApplicationJSONObject?: DashboardCrc200ApplicationJson;
}
