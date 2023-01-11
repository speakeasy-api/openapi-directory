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
exports.ReplaceChannelModeratorsResponse = exports.ReplaceChannelModeratorsRequest = exports.ReplaceChannelModeratorsSecurity = exports.ReplaceChannelModeratorsRequestBody = exports.ReplaceChannelModeratorsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplaceChannelModeratorsPathParams = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsPathParams, _super);
    function ReplaceChannelModeratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], ReplaceChannelModeratorsPathParams.prototype, "channelId", void 0);
    return ReplaceChannelModeratorsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReplaceChannelModeratorsPathParams = ReplaceChannelModeratorsPathParams;
var ReplaceChannelModeratorsRequestBody = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsRequestBody, _super);
    function ReplaceChannelModeratorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_uri" }),
        __metadata("design:type", String)
    ], ReplaceChannelModeratorsRequestBody.prototype, "userUri", void 0);
    return ReplaceChannelModeratorsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReplaceChannelModeratorsRequestBody = ReplaceChannelModeratorsRequestBody;
var ReplaceChannelModeratorsSecurity = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsSecurity, _super);
    function ReplaceChannelModeratorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplaceChannelModeratorsSecurity.prototype, "oauth2", void 0);
    return ReplaceChannelModeratorsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReplaceChannelModeratorsSecurity = ReplaceChannelModeratorsSecurity;
var ReplaceChannelModeratorsRequest = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsRequest, _super);
    function ReplaceChannelModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplaceChannelModeratorsPathParams)
    ], ReplaceChannelModeratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReplaceChannelModeratorsRequestBody)
    ], ReplaceChannelModeratorsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplaceChannelModeratorsSecurity)
    ], ReplaceChannelModeratorsRequest.prototype, "security", void 0);
    return ReplaceChannelModeratorsRequest;
}(utils_1.SpeakeasyBase));
exports.ReplaceChannelModeratorsRequest = ReplaceChannelModeratorsRequest;
var ReplaceChannelModeratorsResponse = /** @class */ (function (_super) {
    __extends(ReplaceChannelModeratorsResponse, _super);
    function ReplaceChannelModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplaceChannelModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplaceChannelModeratorsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], ReplaceChannelModeratorsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], ReplaceChannelModeratorsResponse.prototype, "legacyError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], ReplaceChannelModeratorsResponse.prototype, "users", void 0);
    return ReplaceChannelModeratorsResponse;
}(utils_1.SpeakeasyBase));
exports.ReplaceChannelModeratorsResponse = ReplaceChannelModeratorsResponse;
