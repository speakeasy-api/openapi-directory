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
exports.ChangeZrLocationResponse = exports.ChangeZrLocationRequest = exports.ChangeZrLocationSecurity = exports.ChangeZrLocationRequests = exports.ChangeZrLocationMultipartFormData = exports.ChangeZrLocationApplicationJson = exports.ChangeZrLocationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChangeZrLocationPathParams = /** @class */ (function (_super) {
    __extends(ChangeZrLocationPathParams, _super);
    function ChangeZrLocationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roomId" }),
        __metadata("design:type", String)
    ], ChangeZrLocationPathParams.prototype, "roomId", void 0);
    return ChangeZrLocationPathParams;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationPathParams = ChangeZrLocationPathParams;
var ChangeZrLocationApplicationJson = /** @class */ (function (_super) {
    __extends(ChangeZrLocationApplicationJson, _super);
    function ChangeZrLocationApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], ChangeZrLocationApplicationJson.prototype, "locationId", void 0);
    return ChangeZrLocationApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationApplicationJson = ChangeZrLocationApplicationJson;
var ChangeZrLocationMultipartFormData = /** @class */ (function (_super) {
    __extends(ChangeZrLocationMultipartFormData, _super);
    function ChangeZrLocationMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=location_id" }),
        __metadata("design:type", String)
    ], ChangeZrLocationMultipartFormData.prototype, "locationId", void 0);
    return ChangeZrLocationMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationMultipartFormData = ChangeZrLocationMultipartFormData;
var ChangeZrLocationRequests = /** @class */ (function (_super) {
    __extends(ChangeZrLocationRequests, _super);
    function ChangeZrLocationRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangeZrLocationApplicationJson)
    ], ChangeZrLocationRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ChangeZrLocationMultipartFormData)
    ], ChangeZrLocationRequests.prototype, "object1", void 0);
    return ChangeZrLocationRequests;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationRequests = ChangeZrLocationRequests;
var ChangeZrLocationSecurity = /** @class */ (function (_super) {
    __extends(ChangeZrLocationSecurity, _super);
    function ChangeZrLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ChangeZrLocationSecurity.prototype, "oAuth", void 0);
    return ChangeZrLocationSecurity;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationSecurity = ChangeZrLocationSecurity;
var ChangeZrLocationRequest = /** @class */ (function (_super) {
    __extends(ChangeZrLocationRequest, _super);
    function ChangeZrLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeZrLocationPathParams)
    ], ChangeZrLocationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeZrLocationRequests)
    ], ChangeZrLocationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeZrLocationSecurity)
    ], ChangeZrLocationRequest.prototype, "security", void 0);
    return ChangeZrLocationRequest;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationRequest = ChangeZrLocationRequest;
var ChangeZrLocationResponse = /** @class */ (function (_super) {
    __extends(ChangeZrLocationResponse, _super);
    function ChangeZrLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ChangeZrLocationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChangeZrLocationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChangeZrLocationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ChangeZrLocationResponse.prototype, "changeZRLocation204ApplicationJSONAny", void 0);
    return ChangeZrLocationResponse;
}(utils_1.SpeakeasyBase));
exports.ChangeZrLocationResponse = ChangeZrLocationResponse;
