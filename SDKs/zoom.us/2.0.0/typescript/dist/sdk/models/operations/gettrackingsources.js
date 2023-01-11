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
exports.GetTrackingSourcesResponse = exports.GetTrackingSourcesRequest = exports.GetTrackingSources200ApplicationJson = exports.GetTrackingSources200ApplicationJsonTrackingSources = exports.GetTrackingSourcesSecurity = exports.GetTrackingSourcesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTrackingSourcesPathParams = /** @class */ (function (_super) {
    __extends(GetTrackingSourcesPathParams, _super);
    function GetTrackingSourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], GetTrackingSourcesPathParams.prototype, "webinarId", void 0);
    return GetTrackingSourcesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTrackingSourcesPathParams = GetTrackingSourcesPathParams;
var GetTrackingSourcesSecurity = /** @class */ (function (_super) {
    __extends(GetTrackingSourcesSecurity, _super);
    function GetTrackingSourcesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetTrackingSourcesSecurity.prototype, "oAuth", void 0);
    return GetTrackingSourcesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTrackingSourcesSecurity = GetTrackingSourcesSecurity;
var GetTrackingSources200ApplicationJsonTrackingSources = /** @class */ (function (_super) {
    __extends(GetTrackingSources200ApplicationJsonTrackingSources, _super);
    function GetTrackingSources200ApplicationJsonTrackingSources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetTrackingSources200ApplicationJsonTrackingSources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_count" }),
        __metadata("design:type", Number)
    ], GetTrackingSources200ApplicationJsonTrackingSources.prototype, "registrationCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_name" }),
        __metadata("design:type", String)
    ], GetTrackingSources200ApplicationJsonTrackingSources.prototype, "sourceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_url" }),
        __metadata("design:type", String)
    ], GetTrackingSources200ApplicationJsonTrackingSources.prototype, "trackingUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visitor_count" }),
        __metadata("design:type", Number)
    ], GetTrackingSources200ApplicationJsonTrackingSources.prototype, "visitorCount", void 0);
    return GetTrackingSources200ApplicationJsonTrackingSources;
}(utils_1.SpeakeasyBase));
exports.GetTrackingSources200ApplicationJsonTrackingSources = GetTrackingSources200ApplicationJsonTrackingSources;
var GetTrackingSources200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSources200ApplicationJson, _super);
    function GetTrackingSources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], GetTrackingSources200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_sources", elemType: GetTrackingSources200ApplicationJsonTrackingSources }),
        __metadata("design:type", Array)
    ], GetTrackingSources200ApplicationJson.prototype, "trackingSources", void 0);
    return GetTrackingSources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTrackingSources200ApplicationJson = GetTrackingSources200ApplicationJson;
var GetTrackingSourcesRequest = /** @class */ (function (_super) {
    __extends(GetTrackingSourcesRequest, _super);
    function GetTrackingSourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrackingSourcesPathParams)
    ], GetTrackingSourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrackingSourcesSecurity)
    ], GetTrackingSourcesRequest.prototype, "security", void 0);
    return GetTrackingSourcesRequest;
}(utils_1.SpeakeasyBase));
exports.GetTrackingSourcesRequest = GetTrackingSourcesRequest;
var GetTrackingSourcesResponse = /** @class */ (function (_super) {
    __extends(GetTrackingSourcesResponse, _super);
    function GetTrackingSourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetTrackingSourcesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTrackingSourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTrackingSourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrackingSources200ApplicationJson)
    ], GetTrackingSourcesResponse.prototype, "getTrackingSources200ApplicationJSONObject", void 0);
    return GetTrackingSourcesResponse;
}(utils_1.SpeakeasyBase));
exports.GetTrackingSourcesResponse = GetTrackingSourcesResponse;
