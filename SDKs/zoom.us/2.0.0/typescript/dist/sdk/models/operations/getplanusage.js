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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlanUsageResponse = exports.GetPlanUsageRequest = exports.GetPlanUsage200ApplicationJson = exports.GetPlanUsage200ApplicationJsonPlanZoomRooms = exports.GetPlanUsage200ApplicationJsonPlanWebinar = exports.GetPlanUsage200ApplicationJsonPlanUnited = exports.GetPlanUsage200ApplicationJsonPlanRecording = exports.GetPlanUsage200ApplicationJsonPlanLargeMeeting = exports.GetPlanUsage200ApplicationJsonPlanBase = exports.GetPlanUsageSecurity = exports.GetPlanUsagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPlanUsagePathParams = /** @class */ (function (_super) {
    __extends(GetPlanUsagePathParams, _super);
    function GetPlanUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetPlanUsagePathParams.prototype, "accountId", void 0);
    return GetPlanUsagePathParams;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsagePathParams = GetPlanUsagePathParams;
var GetPlanUsageSecurity = /** @class */ (function (_super) {
    __extends(GetPlanUsageSecurity, _super);
    function GetPlanUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetPlanUsageSecurity.prototype, "oAuth", void 0);
    return GetPlanUsageSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsageSecurity = GetPlanUsageSecurity;
var GetPlanUsage200ApplicationJsonPlanBase = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJsonPlanBase, _super);
    function GetPlanUsage200ApplicationJsonPlanBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanBase.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanBase.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanBase.prototype, "usage", void 0);
    return GetPlanUsage200ApplicationJsonPlanBase;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJsonPlanBase = GetPlanUsage200ApplicationJsonPlanBase;
var GetPlanUsage200ApplicationJsonPlanLargeMeeting = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJsonPlanLargeMeeting, _super);
    function GetPlanUsage200ApplicationJsonPlanLargeMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanLargeMeeting.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanLargeMeeting.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanLargeMeeting.prototype, "usage", void 0);
    return GetPlanUsage200ApplicationJsonPlanLargeMeeting;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJsonPlanLargeMeeting = GetPlanUsage200ApplicationJsonPlanLargeMeeting;
// GetPlanUsage200ApplicationJsonPlanRecording
/**
 * Recording Plan
**/
var GetPlanUsage200ApplicationJsonPlanRecording = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJsonPlanRecording, _super);
    function GetPlanUsage200ApplicationJsonPlanRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free_storage" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanRecording.prototype, "freeStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free_storage_usage" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanRecording.prototype, "freeStorageUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_storage" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanRecording.prototype, "planStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_storage_exceed" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanRecording.prototype, "planStorageExceed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_storage_usage" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanRecording.prototype, "planStorageUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanRecording.prototype, "type", void 0);
    return GetPlanUsage200ApplicationJsonPlanRecording;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJsonPlanRecording = GetPlanUsage200ApplicationJsonPlanRecording;
// GetPlanUsage200ApplicationJsonPlanUnited
/**
 * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
**/
var GetPlanUsage200ApplicationJsonPlanUnited = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJsonPlanUnited, _super);
    function GetPlanUsage200ApplicationJsonPlanUnited() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanUnited.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanUnited.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanUnited.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanUnited.prototype, "usage", void 0);
    return GetPlanUsage200ApplicationJsonPlanUnited;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJsonPlanUnited = GetPlanUsage200ApplicationJsonPlanUnited;
var GetPlanUsage200ApplicationJsonPlanWebinar = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJsonPlanWebinar, _super);
    function GetPlanUsage200ApplicationJsonPlanWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanWebinar.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanWebinar.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanWebinar.prototype, "usage", void 0);
    return GetPlanUsage200ApplicationJsonPlanWebinar;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJsonPlanWebinar = GetPlanUsage200ApplicationJsonPlanWebinar;
var GetPlanUsage200ApplicationJsonPlanZoomRooms = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJsonPlanZoomRooms, _super);
    function GetPlanUsage200ApplicationJsonPlanZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanZoomRooms.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlanUsage200ApplicationJsonPlanZoomRooms.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], GetPlanUsage200ApplicationJsonPlanZoomRooms.prototype, "usage", void 0);
    return GetPlanUsage200ApplicationJsonPlanZoomRooms;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJsonPlanZoomRooms = GetPlanUsage200ApplicationJsonPlanZoomRooms;
var GetPlanUsage200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPlanUsage200ApplicationJson, _super);
    function GetPlanUsage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_base", elemType: GetPlanUsage200ApplicationJsonPlanBase }),
        __metadata("design:type", Array)
    ], GetPlanUsage200ApplicationJson.prototype, "planBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_large_meeting", elemType: GetPlanUsage200ApplicationJsonPlanLargeMeeting }),
        __metadata("design:type", Array)
    ], GetPlanUsage200ApplicationJson.prototype, "planLargeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_recording" }),
        __metadata("design:type", GetPlanUsage200ApplicationJsonPlanRecording)
    ], GetPlanUsage200ApplicationJson.prototype, "planRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_united" }),
        __metadata("design:type", GetPlanUsage200ApplicationJsonPlanUnited)
    ], GetPlanUsage200ApplicationJson.prototype, "planUnited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_webinar", elemType: GetPlanUsage200ApplicationJsonPlanWebinar }),
        __metadata("design:type", Array)
    ], GetPlanUsage200ApplicationJson.prototype, "planWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_zoom_rooms", elemType: GetPlanUsage200ApplicationJsonPlanZoomRooms }),
        __metadata("design:type", Array)
    ], GetPlanUsage200ApplicationJson.prototype, "planZoomRooms", void 0);
    return GetPlanUsage200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsage200ApplicationJson = GetPlanUsage200ApplicationJson;
var GetPlanUsageRequest = /** @class */ (function (_super) {
    __extends(GetPlanUsageRequest, _super);
    function GetPlanUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlanUsagePathParams)
    ], GetPlanUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlanUsageSecurity)
    ], GetPlanUsageRequest.prototype, "security", void 0);
    return GetPlanUsageRequest;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsageRequest = GetPlanUsageRequest;
var GetPlanUsageResponse = /** @class */ (function (_super) {
    __extends(GetPlanUsageResponse, _super);
    function GetPlanUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetPlanUsageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPlanUsageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPlanUsageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlanUsage200ApplicationJson)
    ], GetPlanUsageResponse.prototype, "getPlanUsage200ApplicationJSONObject", void 0);
    return GetPlanUsageResponse;
}(utils_1.SpeakeasyBase));
exports.GetPlanUsageResponse = GetPlanUsageResponse;
