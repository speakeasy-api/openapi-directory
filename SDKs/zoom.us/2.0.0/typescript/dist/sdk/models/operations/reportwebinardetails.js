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
exports.ReportWebinarDetailsResponse = exports.ReportWebinarDetailsRequest = exports.ReportWebinarDetails200ApplicationJson = exports.ReportWebinarDetails200ApplicationJsonTrackingFields = exports.ReportWebinarDetails200ApplicationJsonCustomKeys = exports.ReportWebinarDetailsSecurity = exports.ReportWebinarDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportWebinarDetailsPathParams = /** @class */ (function (_super) {
    __extends(ReportWebinarDetailsPathParams, _super);
    function ReportWebinarDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ReportWebinarDetailsPathParams.prototype, "webinarId", void 0);
    return ReportWebinarDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetailsPathParams = ReportWebinarDetailsPathParams;
var ReportWebinarDetailsSecurity = /** @class */ (function (_super) {
    __extends(ReportWebinarDetailsSecurity, _super);
    function ReportWebinarDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportWebinarDetailsSecurity.prototype, "oAuth", void 0);
    return ReportWebinarDetailsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetailsSecurity = ReportWebinarDetailsSecurity;
var ReportWebinarDetails200ApplicationJsonCustomKeys = /** @class */ (function (_super) {
    __extends(ReportWebinarDetails200ApplicationJsonCustomKeys, _super);
    function ReportWebinarDetails200ApplicationJsonCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJsonCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJsonCustomKeys.prototype, "value", void 0);
    return ReportWebinarDetails200ApplicationJsonCustomKeys;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetails200ApplicationJsonCustomKeys = ReportWebinarDetails200ApplicationJsonCustomKeys;
var ReportWebinarDetails200ApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(ReportWebinarDetails200ApplicationJsonTrackingFields, _super);
    function ReportWebinarDetails200ApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJsonTrackingFields.prototype, "value", void 0);
    return ReportWebinarDetails200ApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetails200ApplicationJsonTrackingFields = ReportWebinarDetails200ApplicationJsonTrackingFields;
var ReportWebinarDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportWebinarDetails200ApplicationJson, _super);
    function ReportWebinarDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: ReportWebinarDetails200ApplicationJsonCustomKeys }),
        __metadata("design:type", Array)
    ], ReportWebinarDetails200ApplicationJson.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJson.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ReportWebinarDetails200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], ReportWebinarDetails200ApplicationJson.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportWebinarDetails200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_count" }),
        __metadata("design:type", Number)
    ], ReportWebinarDetails200ApplicationJson.prototype, "participantsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ReportWebinarDetails200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_minutes" }),
        __metadata("design:type", Number)
    ], ReportWebinarDetails200ApplicationJson.prototype, "totalMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: ReportWebinarDetails200ApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], ReportWebinarDetails200ApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ReportWebinarDetails200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJson.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJson.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ReportWebinarDetails200ApplicationJson.prototype, "uuid", void 0);
    return ReportWebinarDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetails200ApplicationJson = ReportWebinarDetails200ApplicationJson;
var ReportWebinarDetailsRequest = /** @class */ (function (_super) {
    __extends(ReportWebinarDetailsRequest, _super);
    function ReportWebinarDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarDetailsPathParams)
    ], ReportWebinarDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarDetailsSecurity)
    ], ReportWebinarDetailsRequest.prototype, "security", void 0);
    return ReportWebinarDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetailsRequest = ReportWebinarDetailsRequest;
var ReportWebinarDetailsResponse = /** @class */ (function (_super) {
    __extends(ReportWebinarDetailsResponse, _super);
    function ReportWebinarDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportWebinarDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportWebinarDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportWebinarDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarDetails200ApplicationJson)
    ], ReportWebinarDetailsResponse.prototype, "reportWebinarDetails200ApplicationJSONObject", void 0);
    return ReportWebinarDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarDetailsResponse = ReportWebinarDetailsResponse;
