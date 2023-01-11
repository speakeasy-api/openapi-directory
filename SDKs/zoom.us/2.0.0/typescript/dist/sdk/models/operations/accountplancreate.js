"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPlanCreateResponse = exports.AccountPlanCreateRequest = exports.AccountPlanCreate201ApplicationJson = exports.AccountPlanCreate201ApplicationJsonPlanZoomRooms = exports.AccountPlanCreate201ApplicationJsonPlanWebinar = exports.AccountPlanCreate201ApplicationJsonPlanRoomConnector = exports.AccountPlanCreate201ApplicationJsonPhonePlan = exports.AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber = exports.AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling = exports.AccountPlanCreate201ApplicationJsonPhonePlanPlanBase = exports.AccountPlanCreate201ApplicationJsonPlanLargeMeeting = exports.AccountPlanCreate201ApplicationJsonPlanBase = exports.AccountPlanCreate201ApplicationJsonPlanAudio = exports.AccountPlanCreateRequests = exports.AccountPlanCreateMultipartFormData1 = exports.AccountPlanCreateMultipartFormDataPlanZoomRooms = exports.AccountPlanCreateMultipartFormDataPlanWebinar = exports.AccountPlanCreateMultipartFormDataPlanRoomConnector = exports.AccountPlanCreateMultipartFormDataPhonePlan = exports.AccountPlanCreateMultipartFormDataPhonePlanPlanNumber = exports.AccountPlanCreateMultipartFormDataPhonePlanPlanCalling = exports.AccountPlanCreateMultipartFormDataPhonePlanPlanBase = exports.AccountPlanCreateMultipartFormDataPlanLargeMeeting = exports.AccountPlanCreateMultipartFormDataPlanBase = exports.AccountPlanCreateMultipartFormDataPlanAudio = exports.AccountPlanCreateMultipartFormDataContact = exports.AccountPlanCreateApplicationJson = exports.AccountPlanCreateApplicationJsonPlanZoomRooms = exports.AccountPlanCreateApplicationJsonPlanWebinar = exports.AccountPlanCreateApplicationJsonPlanRoomConnector = exports.AccountPlanCreateApplicationJsonPhonePlan = exports.AccountPlanCreateApplicationJsonPhonePlanPlanNumber = exports.AccountPlanCreateApplicationJsonPhonePlanPlanCalling = exports.AccountPlanCreateApplicationJsonPhonePlanPlanBase = exports.AccountPlanCreateApplicationJsonPlanLargeMeeting = exports.AccountPlanCreateApplicationJsonPlanBase = exports.AccountPlanCreateApplicationJsonPlanAudio = exports.AccountPlanCreateApplicationJsonContact = exports.AccountPlanCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountPlanCreatePathParams = /** @class */ (function (_super) {
    __extends(AccountPlanCreatePathParams, _super);
    function AccountPlanCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPlanCreatePathParams.prototype, "accountId", void 0);
    return AccountPlanCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreatePathParams = AccountPlanCreatePathParams;
// AccountPlanCreateApplicationJsonContact
/**
 * Billing Contact object.
**/
var AccountPlanCreateApplicationJsonContact = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonContact, _super);
    function AccountPlanCreateApplicationJsonContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apt" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "apt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonContact.prototype, "zip", void 0);
    return AccountPlanCreateApplicationJsonContact;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonContact = AccountPlanCreateApplicationJsonContact;
// AccountPlanCreateApplicationJsonPlanAudio
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
var AccountPlanCreateApplicationJsonPlanAudio = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPlanAudio, _super);
    function AccountPlanCreateApplicationJsonPlanAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanAudio.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ddi_numbers" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPlanAudio.prototype, "ddiNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanAudio.prototype, "premiumCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tollfree_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanAudio.prototype, "tollfreeCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanAudio.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPlanAudio;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPlanAudio = AccountPlanCreateApplicationJsonPlanAudio;
// AccountPlanCreateApplicationJsonPlanBase
/**
 * Account base plan object.
**/
var AccountPlanCreateApplicationJsonPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPlanBase, _super);
    function AccountPlanCreateApplicationJsonPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPlanBase.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanBase.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPlanBase = AccountPlanCreateApplicationJsonPlanBase;
// AccountPlanCreateApplicationJsonPlanLargeMeeting
/**
 * Account plan object.
**/
var AccountPlanCreateApplicationJsonPlanLargeMeeting = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPlanLargeMeeting, _super);
    function AccountPlanCreateApplicationJsonPlanLargeMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPlanLargeMeeting.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanLargeMeeting.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPlanLargeMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPlanLargeMeeting = AccountPlanCreateApplicationJsonPlanLargeMeeting;
// AccountPlanCreateApplicationJsonPhonePlanPlanBase
/**
 * Additional phone base plans.
**/
var AccountPlanCreateApplicationJsonPhonePlanPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPhonePlanPlanBase, _super);
    function AccountPlanCreateApplicationJsonPhonePlanPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPhonePlanPlanBase.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPhonePlanPlanBase.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPhonePlanPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPhonePlanPlanBase = AccountPlanCreateApplicationJsonPhonePlanPlanBase;
var AccountPlanCreateApplicationJsonPhonePlanPlanCalling = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPhonePlanPlanCalling, _super);
    function AccountPlanCreateApplicationJsonPhonePlanPlanCalling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPhonePlanPlanCalling.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPhonePlanPlanCalling.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPhonePlanPlanCalling;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPhonePlanPlanCalling = AccountPlanCreateApplicationJsonPhonePlanPlanCalling;
var AccountPlanCreateApplicationJsonPhonePlanPlanNumber = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPhonePlanPlanNumber, _super);
    function AccountPlanCreateApplicationJsonPhonePlanPlanNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPhonePlanPlanNumber.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPhonePlanPlanNumber.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPhonePlanPlanNumber;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPhonePlanPlanNumber = AccountPlanCreateApplicationJsonPhonePlanPlanNumber;
// AccountPlanCreateApplicationJsonPhonePlan
/**
 * Phone Plan Object
**/
var AccountPlanCreateApplicationJsonPhonePlan = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPhonePlan, _super);
    function AccountPlanCreateApplicationJsonPhonePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonPhonePlanPlanBase)
    ], AccountPlanCreateApplicationJsonPhonePlan.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_calling", elemType: AccountPlanCreateApplicationJsonPhonePlanPlanCalling }),
        __metadata("design:type", Array)
    ], AccountPlanCreateApplicationJsonPhonePlan.prototype, "planCalling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_number", elemType: AccountPlanCreateApplicationJsonPhonePlanPlanNumber }),
        __metadata("design:type", Array)
    ], AccountPlanCreateApplicationJsonPhonePlan.prototype, "planNumber", void 0);
    return AccountPlanCreateApplicationJsonPhonePlan;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPhonePlan = AccountPlanCreateApplicationJsonPhonePlan;
// AccountPlanCreateApplicationJsonPlanRoomConnector
/**
 * Account plan object.
**/
var AccountPlanCreateApplicationJsonPlanRoomConnector = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPlanRoomConnector, _super);
    function AccountPlanCreateApplicationJsonPlanRoomConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPlanRoomConnector.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanRoomConnector.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPlanRoomConnector;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPlanRoomConnector = AccountPlanCreateApplicationJsonPlanRoomConnector;
// AccountPlanCreateApplicationJsonPlanWebinar
/**
 * Account plan object.
**/
var AccountPlanCreateApplicationJsonPlanWebinar = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPlanWebinar, _super);
    function AccountPlanCreateApplicationJsonPlanWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPlanWebinar.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanWebinar.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPlanWebinar;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPlanWebinar = AccountPlanCreateApplicationJsonPlanWebinar;
// AccountPlanCreateApplicationJsonPlanZoomRooms
/**
 * Account plan object.
**/
var AccountPlanCreateApplicationJsonPlanZoomRooms = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJsonPlanZoomRooms, _super);
    function AccountPlanCreateApplicationJsonPlanZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateApplicationJsonPlanZoomRooms.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJsonPlanZoomRooms.prototype, "type", void 0);
    return AccountPlanCreateApplicationJsonPlanZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJsonPlanZoomRooms = AccountPlanCreateApplicationJsonPlanZoomRooms;
// AccountPlanCreateApplicationJson
/**
 * Account Plans object.
**/
var AccountPlanCreateApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlanCreateApplicationJson, _super);
    function AccountPlanCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonContact)
    ], AccountPlanCreateApplicationJson.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_audio" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonPlanAudio)
    ], AccountPlanCreateApplicationJson.prototype, "planAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonPlanBase)
    ], AccountPlanCreateApplicationJson.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_large_meeting", elemType: AccountPlanCreateApplicationJsonPlanLargeMeeting }),
        __metadata("design:type", Array)
    ], AccountPlanCreateApplicationJson.prototype, "planLargeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_phone" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonPhonePlan)
    ], AccountPlanCreateApplicationJson.prototype, "planPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording" }),
        __metadata("design:type", String)
    ], AccountPlanCreateApplicationJson.prototype, "planRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_room_connector" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonPlanRoomConnector)
    ], AccountPlanCreateApplicationJson.prototype, "planRoomConnector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_webinar", elemType: AccountPlanCreateApplicationJsonPlanWebinar }),
        __metadata("design:type", Array)
    ], AccountPlanCreateApplicationJson.prototype, "planWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_zoom_rooms" }),
        __metadata("design:type", AccountPlanCreateApplicationJsonPlanZoomRooms)
    ], AccountPlanCreateApplicationJson.prototype, "planZoomRooms", void 0);
    return AccountPlanCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateApplicationJson = AccountPlanCreateApplicationJson;
// AccountPlanCreateMultipartFormDataContact
/**
 * Billing Contact object.
**/
var AccountPlanCreateMultipartFormDataContact = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataContact, _super);
    function AccountPlanCreateMultipartFormDataContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apt" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "apt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataContact.prototype, "zip", void 0);
    return AccountPlanCreateMultipartFormDataContact;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataContact = AccountPlanCreateMultipartFormDataContact;
// AccountPlanCreateMultipartFormDataPlanAudio
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
var AccountPlanCreateMultipartFormDataPlanAudio = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPlanAudio, _super);
    function AccountPlanCreateMultipartFormDataPlanAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanAudio.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ddi_numbers" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPlanAudio.prototype, "ddiNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanAudio.prototype, "premiumCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tollfree_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanAudio.prototype, "tollfreeCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanAudio.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPlanAudio;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPlanAudio = AccountPlanCreateMultipartFormDataPlanAudio;
// AccountPlanCreateMultipartFormDataPlanBase
/**
 * Account base plan object.
**/
var AccountPlanCreateMultipartFormDataPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPlanBase, _super);
    function AccountPlanCreateMultipartFormDataPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPlanBase.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanBase.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPlanBase = AccountPlanCreateMultipartFormDataPlanBase;
// AccountPlanCreateMultipartFormDataPlanLargeMeeting
/**
 * Account plan object.
**/
var AccountPlanCreateMultipartFormDataPlanLargeMeeting = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPlanLargeMeeting, _super);
    function AccountPlanCreateMultipartFormDataPlanLargeMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPlanLargeMeeting.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanLargeMeeting.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPlanLargeMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPlanLargeMeeting = AccountPlanCreateMultipartFormDataPlanLargeMeeting;
// AccountPlanCreateMultipartFormDataPhonePlanPlanBase
/**
 * Additional phone base plans.
**/
var AccountPlanCreateMultipartFormDataPhonePlanPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPhonePlanPlanBase, _super);
    function AccountPlanCreateMultipartFormDataPhonePlanPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPhonePlanPlanBase.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPhonePlanPlanBase.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPhonePlanPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPhonePlanPlanBase = AccountPlanCreateMultipartFormDataPhonePlanPlanBase;
var AccountPlanCreateMultipartFormDataPhonePlanPlanCalling = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPhonePlanPlanCalling, _super);
    function AccountPlanCreateMultipartFormDataPhonePlanPlanCalling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPhonePlanPlanCalling.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPhonePlanPlanCalling.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPhonePlanPlanCalling;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPhonePlanPlanCalling = AccountPlanCreateMultipartFormDataPhonePlanPlanCalling;
var AccountPlanCreateMultipartFormDataPhonePlanPlanNumber = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPhonePlanPlanNumber, _super);
    function AccountPlanCreateMultipartFormDataPhonePlanPlanNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPhonePlanPlanNumber.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPhonePlanPlanNumber.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPhonePlanPlanNumber;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPhonePlanPlanNumber = AccountPlanCreateMultipartFormDataPhonePlanPlanNumber;
// AccountPlanCreateMultipartFormDataPhonePlan
/**
 * Phone Plan Object
**/
var AccountPlanCreateMultipartFormDataPhonePlan = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPhonePlan, _super);
    function AccountPlanCreateMultipartFormDataPhonePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataPhonePlanPlanBase)
    ], AccountPlanCreateMultipartFormDataPhonePlan.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_calling", elemType: AccountPlanCreateMultipartFormDataPhonePlanPlanCalling }),
        __metadata("design:type", Array)
    ], AccountPlanCreateMultipartFormDataPhonePlan.prototype, "planCalling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_number", elemType: AccountPlanCreateMultipartFormDataPhonePlanPlanNumber }),
        __metadata("design:type", Array)
    ], AccountPlanCreateMultipartFormDataPhonePlan.prototype, "planNumber", void 0);
    return AccountPlanCreateMultipartFormDataPhonePlan;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPhonePlan = AccountPlanCreateMultipartFormDataPhonePlan;
// AccountPlanCreateMultipartFormDataPlanRoomConnector
/**
 * Account plan object.
**/
var AccountPlanCreateMultipartFormDataPlanRoomConnector = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPlanRoomConnector, _super);
    function AccountPlanCreateMultipartFormDataPlanRoomConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPlanRoomConnector.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanRoomConnector.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPlanRoomConnector;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPlanRoomConnector = AccountPlanCreateMultipartFormDataPlanRoomConnector;
// AccountPlanCreateMultipartFormDataPlanWebinar
/**
 * Account plan object.
**/
var AccountPlanCreateMultipartFormDataPlanWebinar = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPlanWebinar, _super);
    function AccountPlanCreateMultipartFormDataPlanWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPlanWebinar.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanWebinar.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPlanWebinar;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPlanWebinar = AccountPlanCreateMultipartFormDataPlanWebinar;
// AccountPlanCreateMultipartFormDataPlanZoomRooms
/**
 * Account plan object.
**/
var AccountPlanCreateMultipartFormDataPlanZoomRooms = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormDataPlanZoomRooms, _super);
    function AccountPlanCreateMultipartFormDataPlanZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreateMultipartFormDataPlanZoomRooms.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormDataPlanZoomRooms.prototype, "type", void 0);
    return AccountPlanCreateMultipartFormDataPlanZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormDataPlanZoomRooms = AccountPlanCreateMultipartFormDataPlanZoomRooms;
// AccountPlanCreateMultipartFormData1
/**
 * Account Plans object.
**/
var AccountPlanCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AccountPlanCreateMultipartFormData1, _super);
    function AccountPlanCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=contact;json=true" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataContact)
    ], AccountPlanCreateMultipartFormData1.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_audio;json=true" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataPlanAudio)
    ], AccountPlanCreateMultipartFormData1.prototype, "planAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_base;json=true" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataPlanBase)
    ], AccountPlanCreateMultipartFormData1.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_large_meeting;json=true", elemType: AccountPlanCreateMultipartFormDataPlanLargeMeeting }),
        __metadata("design:type", Array)
    ], AccountPlanCreateMultipartFormData1.prototype, "planLargeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_phone;json=true" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataPhonePlan)
    ], AccountPlanCreateMultipartFormData1.prototype, "planPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_recording" }),
        __metadata("design:type", String)
    ], AccountPlanCreateMultipartFormData1.prototype, "planRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_room_connector;json=true" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataPlanRoomConnector)
    ], AccountPlanCreateMultipartFormData1.prototype, "planRoomConnector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_webinar;json=true", elemType: AccountPlanCreateMultipartFormDataPlanWebinar }),
        __metadata("design:type", Array)
    ], AccountPlanCreateMultipartFormData1.prototype, "planWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=plan_zoom_rooms;json=true" }),
        __metadata("design:type", AccountPlanCreateMultipartFormDataPlanZoomRooms)
    ], AccountPlanCreateMultipartFormData1.prototype, "planZoomRooms", void 0);
    return AccountPlanCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateMultipartFormData1 = AccountPlanCreateMultipartFormData1;
var AccountPlanCreateRequests = /** @class */ (function (_super) {
    __extends(AccountPlanCreateRequests, _super);
    function AccountPlanCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountPlanCreateApplicationJson)
    ], AccountPlanCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountPlanCreateMultipartFormData1)
    ], AccountPlanCreateRequests.prototype, "object1", void 0);
    return AccountPlanCreateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateRequests = AccountPlanCreateRequests;
// AccountPlanCreate201ApplicationJsonPlanAudio
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
var AccountPlanCreate201ApplicationJsonPlanAudio = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPlanAudio, _super);
    function AccountPlanCreate201ApplicationJsonPlanAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanAudio.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ddi_numbers" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPlanAudio.prototype, "ddiNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanAudio.prototype, "premiumCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tollfree_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanAudio.prototype, "tollfreeCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanAudio.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPlanAudio;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPlanAudio = AccountPlanCreate201ApplicationJsonPlanAudio;
// AccountPlanCreate201ApplicationJsonPlanBase
/**
 * Account base plan object.
**/
var AccountPlanCreate201ApplicationJsonPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPlanBase, _super);
    function AccountPlanCreate201ApplicationJsonPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPlanBase.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanBase.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPlanBase = AccountPlanCreate201ApplicationJsonPlanBase;
// AccountPlanCreate201ApplicationJsonPlanLargeMeeting
/**
 * Account plan object.
**/
var AccountPlanCreate201ApplicationJsonPlanLargeMeeting = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPlanLargeMeeting, _super);
    function AccountPlanCreate201ApplicationJsonPlanLargeMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPlanLargeMeeting.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanLargeMeeting.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPlanLargeMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPlanLargeMeeting = AccountPlanCreate201ApplicationJsonPlanLargeMeeting;
// AccountPlanCreate201ApplicationJsonPhonePlanPlanBase
/**
 * Additional phone base plans.
**/
var AccountPlanCreate201ApplicationJsonPhonePlanPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPhonePlanPlanBase, _super);
    function AccountPlanCreate201ApplicationJsonPhonePlanPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPhonePlanPlanBase.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPhonePlanPlanBase.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPhonePlanPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPhonePlanPlanBase = AccountPlanCreate201ApplicationJsonPhonePlanPlanBase;
var AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling, _super);
    function AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling = AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling;
var AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber, _super);
    function AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber = AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber;
// AccountPlanCreate201ApplicationJsonPhonePlan
/**
 * Phone Plan Object
**/
var AccountPlanCreate201ApplicationJsonPhonePlan = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPhonePlan, _super);
    function AccountPlanCreate201ApplicationJsonPhonePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlanCreate201ApplicationJsonPhonePlanPlanBase)
    ], AccountPlanCreate201ApplicationJsonPhonePlan.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_calling", elemType: AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling }),
        __metadata("design:type", Array)
    ], AccountPlanCreate201ApplicationJsonPhonePlan.prototype, "planCalling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_number", elemType: AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber }),
        __metadata("design:type", Array)
    ], AccountPlanCreate201ApplicationJsonPhonePlan.prototype, "planNumber", void 0);
    return AccountPlanCreate201ApplicationJsonPhonePlan;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPhonePlan = AccountPlanCreate201ApplicationJsonPhonePlan;
// AccountPlanCreate201ApplicationJsonPlanRoomConnector
/**
 * Account plan object.
**/
var AccountPlanCreate201ApplicationJsonPlanRoomConnector = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPlanRoomConnector, _super);
    function AccountPlanCreate201ApplicationJsonPlanRoomConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPlanRoomConnector.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanRoomConnector.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPlanRoomConnector;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPlanRoomConnector = AccountPlanCreate201ApplicationJsonPlanRoomConnector;
// AccountPlanCreate201ApplicationJsonPlanWebinar
/**
 * Account plan object.
**/
var AccountPlanCreate201ApplicationJsonPlanWebinar = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPlanWebinar, _super);
    function AccountPlanCreate201ApplicationJsonPlanWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPlanWebinar.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanWebinar.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPlanWebinar;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPlanWebinar = AccountPlanCreate201ApplicationJsonPlanWebinar;
// AccountPlanCreate201ApplicationJsonPlanZoomRooms
/**
 * Account plan object.
**/
var AccountPlanCreate201ApplicationJsonPlanZoomRooms = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJsonPlanZoomRooms, _super);
    function AccountPlanCreate201ApplicationJsonPlanZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanCreate201ApplicationJsonPlanZoomRooms.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJsonPlanZoomRooms.prototype, "type", void 0);
    return AccountPlanCreate201ApplicationJsonPlanZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJsonPlanZoomRooms = AccountPlanCreate201ApplicationJsonPlanZoomRooms;
// AccountPlanCreate201ApplicationJson
/**
 * Account Plans object.
**/
var AccountPlanCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlanCreate201ApplicationJson, _super);
    function AccountPlanCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_audio" }),
        __metadata("design:type", AccountPlanCreate201ApplicationJsonPlanAudio)
    ], AccountPlanCreate201ApplicationJson.prototype, "planAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlanCreate201ApplicationJsonPlanBase)
    ], AccountPlanCreate201ApplicationJson.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_large_meeting", elemType: AccountPlanCreate201ApplicationJsonPlanLargeMeeting }),
        __metadata("design:type", Array)
    ], AccountPlanCreate201ApplicationJson.prototype, "planLargeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_phone" }),
        __metadata("design:type", AccountPlanCreate201ApplicationJsonPhonePlan)
    ], AccountPlanCreate201ApplicationJson.prototype, "planPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording" }),
        __metadata("design:type", String)
    ], AccountPlanCreate201ApplicationJson.prototype, "planRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_room_connector" }),
        __metadata("design:type", AccountPlanCreate201ApplicationJsonPlanRoomConnector)
    ], AccountPlanCreate201ApplicationJson.prototype, "planRoomConnector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_webinar", elemType: AccountPlanCreate201ApplicationJsonPlanWebinar }),
        __metadata("design:type", Array)
    ], AccountPlanCreate201ApplicationJson.prototype, "planWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_zoom_rooms" }),
        __metadata("design:type", AccountPlanCreate201ApplicationJsonPlanZoomRooms)
    ], AccountPlanCreate201ApplicationJson.prototype, "planZoomRooms", void 0);
    return AccountPlanCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreate201ApplicationJson = AccountPlanCreate201ApplicationJson;
var AccountPlanCreateRequest = /** @class */ (function (_super) {
    __extends(AccountPlanCreateRequest, _super);
    function AccountPlanCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanCreatePathParams)
    ], AccountPlanCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanCreateRequests)
    ], AccountPlanCreateRequest.prototype, "request", void 0);
    return AccountPlanCreateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateRequest = AccountPlanCreateRequest;
var AccountPlanCreateResponse = /** @class */ (function (_super) {
    __extends(AccountPlanCreateResponse, _super);
    function AccountPlanCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountPlanCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountPlanCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountPlanCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountPlanCreateResponse.prototype, "accountPlanCreate200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanCreate201ApplicationJson)
    ], AccountPlanCreateResponse.prototype, "accountPlanCreate201ApplicationJSONObject", void 0);
    return AccountPlanCreateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountPlanCreateResponse = AccountPlanCreateResponse;
