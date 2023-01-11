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
exports.UpdateUserLevelChannelResponse = exports.UpdateUserLevelChannelRequest = exports.UpdateUserLevelChannelSecurity = exports.UpdateUserLevelChannelRequests = exports.UpdateUserLevelChannelMultipartFormData = exports.UpdateUserLevelChannelApplicationJson = exports.UpdateUserLevelChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateUserLevelChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelPathParams, _super);
    function UpdateUserLevelChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], UpdateUserLevelChannelPathParams.prototype, "channelId", void 0);
    return UpdateUserLevelChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelPathParams = UpdateUserLevelChannelPathParams;
var UpdateUserLevelChannelApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelApplicationJson, _super);
    function UpdateUserLevelChannelApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateUserLevelChannelApplicationJson.prototype, "name", void 0);
    return UpdateUserLevelChannelApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelApplicationJson = UpdateUserLevelChannelApplicationJson;
var UpdateUserLevelChannelMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelMultipartFormData, _super);
    function UpdateUserLevelChannelMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UpdateUserLevelChannelMultipartFormData.prototype, "name", void 0);
    return UpdateUserLevelChannelMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelMultipartFormData = UpdateUserLevelChannelMultipartFormData;
var UpdateUserLevelChannelRequests = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelRequests, _super);
    function UpdateUserLevelChannelRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateUserLevelChannelApplicationJson)
    ], UpdateUserLevelChannelRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateUserLevelChannelMultipartFormData)
    ], UpdateUserLevelChannelRequests.prototype, "object1", void 0);
    return UpdateUserLevelChannelRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelRequests = UpdateUserLevelChannelRequests;
var UpdateUserLevelChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelSecurity, _super);
    function UpdateUserLevelChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateUserLevelChannelSecurity.prototype, "oAuth", void 0);
    return UpdateUserLevelChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelSecurity = UpdateUserLevelChannelSecurity;
var UpdateUserLevelChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelRequest, _super);
    function UpdateUserLevelChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserLevelChannelPathParams)
    ], UpdateUserLevelChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserLevelChannelRequests)
    ], UpdateUserLevelChannelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserLevelChannelSecurity)
    ], UpdateUserLevelChannelRequest.prototype, "security", void 0);
    return UpdateUserLevelChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelRequest = UpdateUserLevelChannelRequest;
var UpdateUserLevelChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateUserLevelChannelResponse, _super);
    function UpdateUserLevelChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateUserLevelChannelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserLevelChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUserLevelChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateUserLevelChannelResponse.prototype, "updateUserLevelChannel204ApplicationJSONAny", void 0);
    return UpdateUserLevelChannelResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUserLevelChannelResponse = UpdateUserLevelChannelResponse;
