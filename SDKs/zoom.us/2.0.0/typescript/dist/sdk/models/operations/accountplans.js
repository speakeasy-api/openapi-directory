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
exports.AccountPlansResponse = exports.AccountPlansRequest = exports.AccountPlans200ApplicationJson = exports.AccountPlans200ApplicationJsonPlanZoomRooms = exports.AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum = exports.AccountPlans200ApplicationJsonPlanWebinar = exports.AccountPlans200ApplicationJsonPlanWebinarStatusEnum = exports.AccountPlans200ApplicationJsonPlanRoomConnector = exports.AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum = exports.AccountPlans200ApplicationJsonPlanRecordingStatusEnum = exports.AccountPlans200ApplicationJsonPhonePlan = exports.AccountPlans200ApplicationJsonPhonePlanPlanNumber = exports.AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum = exports.AccountPlans200ApplicationJsonPhonePlanPlanCalling = exports.AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum = exports.AccountPlans200ApplicationJsonPhonePlanPlanBase = exports.AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum = exports.AccountPlans200ApplicationJsonPlanLargeMeeting = exports.AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum = exports.AccountPlans200ApplicationJsonPlanBase = exports.AccountPlans200ApplicationJsonPlanBaseStatusEnum = exports.AccountPlans200ApplicationJsonPlanAudio = exports.AccountPlans200ApplicationJsonPlanAudioStatusEnum = exports.AccountPlansPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountPlansPathParams = /** @class */ (function (_super) {
    __extends(AccountPlansPathParams, _super);
    function AccountPlansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPlansPathParams.prototype, "accountId", void 0);
    return AccountPlansPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPlansPathParams = AccountPlansPathParams;
var AccountPlans200ApplicationJsonPlanAudioStatusEnum;
(function (AccountPlans200ApplicationJsonPlanAudioStatusEnum) {
    AccountPlans200ApplicationJsonPlanAudioStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPlanAudioStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPlanAudioStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPlanAudioStatusEnum = exports.AccountPlans200ApplicationJsonPlanAudioStatusEnum || (exports.AccountPlans200ApplicationJsonPlanAudioStatusEnum = {}));
// AccountPlans200ApplicationJsonPlanAudio
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
**/
var AccountPlans200ApplicationJsonPlanAudio = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPlanAudio, _super);
    function AccountPlans200ApplicationJsonPlanAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ddi_numbers" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "ddiNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium_countries" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "premiumCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tollfree_countries" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "tollfreeCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanAudio.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPlanAudio;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPlanAudio = AccountPlans200ApplicationJsonPlanAudio;
var AccountPlans200ApplicationJsonPlanBaseStatusEnum;
(function (AccountPlans200ApplicationJsonPlanBaseStatusEnum) {
    AccountPlans200ApplicationJsonPlanBaseStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPlanBaseStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPlanBaseStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPlanBaseStatusEnum = exports.AccountPlans200ApplicationJsonPlanBaseStatusEnum || (exports.AccountPlans200ApplicationJsonPlanBaseStatusEnum = {}));
var AccountPlans200ApplicationJsonPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPlanBase, _super);
    function AccountPlans200ApplicationJsonPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPlanBase.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanBase.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanBase.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanBase.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanBase.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPlanBase = AccountPlans200ApplicationJsonPlanBase;
var AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum;
(function (AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum) {
    AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum = exports.AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum || (exports.AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum = {}));
// AccountPlans200ApplicationJsonPlanLargeMeeting
/**
 * Account plan object.
**/
var AccountPlans200ApplicationJsonPlanLargeMeeting = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPlanLargeMeeting, _super);
    function AccountPlans200ApplicationJsonPlanLargeMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPlanLargeMeeting.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanLargeMeeting.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanLargeMeeting.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanLargeMeeting.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanLargeMeeting.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPlanLargeMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPlanLargeMeeting = AccountPlans200ApplicationJsonPlanLargeMeeting;
var AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum;
(function (AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum) {
    AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum = exports.AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum || (exports.AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum = {}));
// AccountPlans200ApplicationJsonPhonePlanPlanBase
/**
 * Additional phone base plans.
**/
var AccountPlans200ApplicationJsonPhonePlanPlanBase = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPhonePlanPlanBase, _super);
    function AccountPlans200ApplicationJsonPhonePlanPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanBase.prototype, "calloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanBase.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanBase.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanBase.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanBase.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPhonePlanPlanBase;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPhonePlanPlanBase = AccountPlans200ApplicationJsonPhonePlanPlanBase;
var AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum;
(function (AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum) {
    AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum = exports.AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum || (exports.AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum = {}));
var AccountPlans200ApplicationJsonPhonePlanPlanCalling = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPhonePlanPlanCalling, _super);
    function AccountPlans200ApplicationJsonPhonePlanPlanCalling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPhonePlanPlanCalling.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanCalling.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanCalling.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanCalling.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanCalling.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPhonePlanPlanCalling;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPhonePlanPlanCalling = AccountPlans200ApplicationJsonPhonePlanPlanCalling;
var AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum;
(function (AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum) {
    AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum = exports.AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum || (exports.AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum = {}));
var AccountPlans200ApplicationJsonPhonePlanPlanNumber = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPhonePlanPlanNumber, _super);
    function AccountPlans200ApplicationJsonPhonePlanPlanNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPhonePlanPlanNumber.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanNumber.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanNumber.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanNumber.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPhonePlanPlanNumber.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPhonePlanPlanNumber;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPhonePlanPlanNumber = AccountPlans200ApplicationJsonPhonePlanPlanNumber;
// AccountPlans200ApplicationJsonPhonePlan
/**
 * Phone Plan Object
**/
var AccountPlans200ApplicationJsonPhonePlan = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPhonePlan, _super);
    function AccountPlans200ApplicationJsonPhonePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlans200ApplicationJsonPhonePlanPlanBase)
    ], AccountPlans200ApplicationJsonPhonePlan.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_calling", elemType: AccountPlans200ApplicationJsonPhonePlanPlanCalling }),
        __metadata("design:type", Array)
    ], AccountPlans200ApplicationJsonPhonePlan.prototype, "planCalling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_number", elemType: AccountPlans200ApplicationJsonPhonePlanPlanNumber }),
        __metadata("design:type", Array)
    ], AccountPlans200ApplicationJsonPhonePlan.prototype, "planNumber", void 0);
    return AccountPlans200ApplicationJsonPhonePlan;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPhonePlan = AccountPlans200ApplicationJsonPhonePlan;
var AccountPlans200ApplicationJsonPlanRecordingStatusEnum;
(function (AccountPlans200ApplicationJsonPlanRecordingStatusEnum) {
    AccountPlans200ApplicationJsonPlanRecordingStatusEnum["Active"] = "Active";
    AccountPlans200ApplicationJsonPlanRecordingStatusEnum["Cancelled"] = "Cancelled";
})(AccountPlans200ApplicationJsonPlanRecordingStatusEnum = exports.AccountPlans200ApplicationJsonPlanRecordingStatusEnum || (exports.AccountPlans200ApplicationJsonPlanRecordingStatusEnum = {}));
var AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum;
(function (AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum) {
    AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum = exports.AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum || (exports.AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum = {}));
var AccountPlans200ApplicationJsonPlanRoomConnector = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPlanRoomConnector, _super);
    function AccountPlans200ApplicationJsonPlanRoomConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPlanRoomConnector.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanRoomConnector.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanRoomConnector.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanRoomConnector.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanRoomConnector.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPlanRoomConnector;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPlanRoomConnector = AccountPlans200ApplicationJsonPlanRoomConnector;
var AccountPlans200ApplicationJsonPlanWebinarStatusEnum;
(function (AccountPlans200ApplicationJsonPlanWebinarStatusEnum) {
    AccountPlans200ApplicationJsonPlanWebinarStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPlanWebinarStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPlanWebinarStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPlanWebinarStatusEnum = exports.AccountPlans200ApplicationJsonPlanWebinarStatusEnum || (exports.AccountPlans200ApplicationJsonPlanWebinarStatusEnum = {}));
// AccountPlans200ApplicationJsonPlanWebinar
/**
 * Account plan object.
**/
var AccountPlans200ApplicationJsonPlanWebinar = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPlanWebinar, _super);
    function AccountPlans200ApplicationJsonPlanWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPlanWebinar.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanWebinar.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanWebinar.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanWebinar.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanWebinar.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPlanWebinar;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPlanWebinar = AccountPlans200ApplicationJsonPlanWebinar;
var AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum;
(function (AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum) {
    AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum["Active"] = "active";
    AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum["Cancel"] = "cancel";
    AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum["Expired"] = "expired";
})(AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum = exports.AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum || (exports.AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum = {}));
var AccountPlans200ApplicationJsonPlanZoomRooms = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJsonPlanZoomRooms, _super);
    function AccountPlans200ApplicationJsonPlanZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlans200ApplicationJsonPlanZoomRooms.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanZoomRooms.prototype, "nextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanZoomRooms.prototype, "serviceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanZoomRooms.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJsonPlanZoomRooms.prototype, "type", void 0);
    return AccountPlans200ApplicationJsonPlanZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJsonPlanZoomRooms = AccountPlans200ApplicationJsonPlanZoomRooms;
var AccountPlans200ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlans200ApplicationJson, _super);
    function AccountPlans200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_audio" }),
        __metadata("design:type", AccountPlans200ApplicationJsonPlanAudio)
    ], AccountPlans200ApplicationJson.prototype, "planAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base" }),
        __metadata("design:type", AccountPlans200ApplicationJsonPlanBase)
    ], AccountPlans200ApplicationJson.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_large_meeting", elemType: AccountPlans200ApplicationJsonPlanLargeMeeting }),
        __metadata("design:type", Array)
    ], AccountPlans200ApplicationJson.prototype, "planLargeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_phone" }),
        __metadata("design:type", AccountPlans200ApplicationJsonPhonePlan)
    ], AccountPlans200ApplicationJson.prototype, "planPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJson.prototype, "planRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording_next_invoice_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJson.prototype, "planRecordingNextInvoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording_service_effective_date" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJson.prototype, "planRecordingServiceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording_status" }),
        __metadata("design:type", String)
    ], AccountPlans200ApplicationJson.prototype, "planRecordingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_room_connector" }),
        __metadata("design:type", AccountPlans200ApplicationJsonPlanRoomConnector)
    ], AccountPlans200ApplicationJson.prototype, "planRoomConnector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_webinar", elemType: AccountPlans200ApplicationJsonPlanWebinar }),
        __metadata("design:type", Array)
    ], AccountPlans200ApplicationJson.prototype, "planWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_zoom_rooms" }),
        __metadata("design:type", AccountPlans200ApplicationJsonPlanZoomRooms)
    ], AccountPlans200ApplicationJson.prototype, "planZoomRooms", void 0);
    return AccountPlans200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlans200ApplicationJson = AccountPlans200ApplicationJson;
var AccountPlansRequest = /** @class */ (function (_super) {
    __extends(AccountPlansRequest, _super);
    function AccountPlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlansPathParams)
    ], AccountPlansRequest.prototype, "pathParams", void 0);
    return AccountPlansRequest;
}(utils_1.SpeakeasyBase));
exports.AccountPlansRequest = AccountPlansRequest;
var AccountPlansResponse = /** @class */ (function (_super) {
    __extends(AccountPlansResponse, _super);
    function AccountPlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountPlansResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountPlansResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountPlansResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlans200ApplicationJson)
    ], AccountPlansResponse.prototype, "accountPlans200ApplicationJSONObject", void 0);
    return AccountPlansResponse;
}(utils_1.SpeakeasyBase));
exports.AccountPlansResponse = AccountPlansResponse;
