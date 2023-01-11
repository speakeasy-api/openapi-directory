import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Accounts } from "./accounts";
import { Billing } from "./billing";
import { ChatChannels } from "./chatchannels";
import { ChatChannelsAccountLevel } from "./chatchannelsaccountlevel";
import { ChatMessages } from "./chatmessages";
import { ChatbotMessages } from "./chatbotmessages";
import { CloudRecording } from "./cloudrecording";
import { CommonAreaPhones } from "./commonareaphones";
import { Contacts } from "./contacts";
import { Dashboards } from "./dashboards";
import { DeprecatedApiEndpoints } from "./deprecatedapiendpoints";
import { Devices } from "./devices";
import { Groups } from "./groups";
import { ImChat } from "./imchat";
import { ImGroups } from "./imgroups";
import { Meetings } from "./meetings";
import { Pac } from "./pac";
import { Phone } from "./phone";
import { PhoneAutoReceptionists } from "./phoneautoreceptionists";
import { PhoneBlockedList } from "./phoneblockedlist";
import { PhoneCallQueues } from "./phonecallqueues";
import { PhoneDevices } from "./phonedevices";
import { PhoneReports } from "./phonereports";
import { PhoneSharedLineGroups } from "./phonesharedlinegroups";
import { PhoneSite } from "./phonesite";
import { Reports } from "./reports";
import { Roles } from "./roles";
import { Rooms } from "./rooms";
import { RoomsAccount } from "./roomsaccount";
import { RoomsDevices } from "./roomsdevices";
import { RoomsLocation } from "./roomslocation";
import { SipConnectedAudio } from "./sipconnectedaudio";
import { SipPhone } from "./sipphone";
import { Tsp } from "./tsp";
import { TrackingField } from "./trackingfield";
import { Users } from "./users";
import { Webinars } from "./webinars";


export const ServerList = [
	"https://api.zoom.us/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public accounts: Accounts;
  public billing: Billing;
  public chatChannels: ChatChannels;
  public chatChannelsAccountLevel: ChatChannelsAccountLevel;
  public chatMessages: ChatMessages;
  public chatbotMessages: ChatbotMessages;
  public cloudRecording: CloudRecording;
  public commonAreaPhones: CommonAreaPhones;
  public contacts: Contacts;
  public dashboards: Dashboards;
  public deprecatedAPIEndpoints: DeprecatedApiEndpoints;
  public devices: Devices;
  public groups: Groups;
  public imChat: ImChat;
  public imGroups: ImGroups;
  public meetings: Meetings;
  public pac: Pac;
  public phone: Phone;
  public phoneAutoReceptionists: PhoneAutoReceptionists;
  public phoneBlockedList: PhoneBlockedList;
  public phoneCallQueues: PhoneCallQueues;
  public phoneDevices: PhoneDevices;
  public phoneReports: PhoneReports;
  public phoneSharedLineGroups: PhoneSharedLineGroups;
  public phoneSite: PhoneSite;
  public reports: Reports;
  public roles: Roles;
  public rooms: Rooms;
  public roomsAccount: RoomsAccount;
  public roomsDevices: RoomsDevices;
  public roomsLocation: RoomsLocation;
  public sipConnectedAudio: SipConnectedAudio;
  public sipPhone: SipPhone;
  public tsp: Tsp;
  public trackingField: TrackingField;
  public users: Users;
  public webinars: Webinars;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billing = new Billing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chatChannels = new ChatChannels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chatChannelsAccountLevel = new ChatChannelsAccountLevel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chatMessages = new ChatMessages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chatbotMessages = new ChatbotMessages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cloudRecording = new CloudRecording(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commonAreaPhones = new CommonAreaPhones(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contacts = new Contacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dashboards = new Dashboards(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deprecatedAPIEndpoints = new DeprecatedApiEndpoints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.devices = new Devices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groups = new Groups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imChat = new ImChat(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imGroups = new ImGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.meetings = new Meetings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pac = new Pac(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phone = new Phone(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneAutoReceptionists = new PhoneAutoReceptionists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneBlockedList = new PhoneBlockedList(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneCallQueues = new PhoneCallQueues(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneDevices = new PhoneDevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneReports = new PhoneReports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneSharedLineGroups = new PhoneSharedLineGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.phoneSite = new PhoneSite(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.reports = new Reports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roles = new Roles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rooms = new Rooms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roomsAccount = new RoomsAccount(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roomsDevices = new RoomsDevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roomsLocation = new RoomsLocation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sipConnectedAudio = new SipConnectedAudio(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sipPhone = new SipPhone(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tsp = new Tsp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trackingField = new TrackingField(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webinars = new Webinars(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}