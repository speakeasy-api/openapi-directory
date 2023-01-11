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
exports.UpdateChannelResponse = exports.UpdateChannelRequest = exports.UpdateChannelSecurity = exports.UpdateChannelRequests = exports.UpdateChannelMultipartFormData = exports.UpdateChannelApplicationJson = exports.UpdateChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateChannelPathParams, _super);
    function UpdateChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], UpdateChannelPathParams.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateChannelPathParams.prototype, "userId", void 0);
    return UpdateChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelPathParams = UpdateChannelPathParams;
var UpdateChannelApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateChannelApplicationJson, _super);
    function UpdateChannelApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateChannelApplicationJson.prototype, "name", void 0);
    return UpdateChannelApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelApplicationJson = UpdateChannelApplicationJson;
var UpdateChannelMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateChannelMultipartFormData, _super);
    function UpdateChannelMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UpdateChannelMultipartFormData.prototype, "name", void 0);
    return UpdateChannelMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelMultipartFormData = UpdateChannelMultipartFormData;
var UpdateChannelRequests = /** @class */ (function (_super) {
    __extends(UpdateChannelRequests, _super);
    function UpdateChannelRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateChannelApplicationJson)
    ], UpdateChannelRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateChannelMultipartFormData)
    ], UpdateChannelRequests.prototype, "object1", void 0);
    return UpdateChannelRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelRequests = UpdateChannelRequests;
var UpdateChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateChannelSecurity, _super);
    function UpdateChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateChannelSecurity.prototype, "oAuth", void 0);
    return UpdateChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelSecurity = UpdateChannelSecurity;
var UpdateChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelRequest, _super);
    function UpdateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateChannelPathParams)
    ], UpdateChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateChannelRequests)
    ], UpdateChannelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateChannelSecurity)
    ], UpdateChannelRequest.prototype, "security", void 0);
    return UpdateChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelRequest = UpdateChannelRequest;
var UpdateChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateChannelResponse, _super);
    function UpdateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateChannelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "updateChannel204ApplicationJSONAny", void 0);
    return UpdateChannelResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateChannelResponse = UpdateChannelResponse;
