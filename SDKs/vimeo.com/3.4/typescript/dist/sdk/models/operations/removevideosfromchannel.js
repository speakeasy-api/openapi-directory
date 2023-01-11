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
exports.RemoveVideosFromChannelResponse = exports.RemoveVideosFromChannelRequest = exports.RemoveVideosFromChannelSecurity = exports.RemoveVideosFromChannelRequestBody = exports.RemoveVideosFromChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RemoveVideosFromChannelPathParams = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelPathParams, _super);
    function RemoveVideosFromChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], RemoveVideosFromChannelPathParams.prototype, "channelId", void 0);
    return RemoveVideosFromChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromChannelPathParams = RemoveVideosFromChannelPathParams;
var RemoveVideosFromChannelRequestBody = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelRequestBody, _super);
    function RemoveVideosFromChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_uri" }),
        __metadata("design:type", String)
    ], RemoveVideosFromChannelRequestBody.prototype, "videoUri", void 0);
    return RemoveVideosFromChannelRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromChannelRequestBody = RemoveVideosFromChannelRequestBody;
var RemoveVideosFromChannelSecurity = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelSecurity, _super);
    function RemoveVideosFromChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemoveVideosFromChannelSecurity.prototype, "oauth2", void 0);
    return RemoveVideosFromChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromChannelSecurity = RemoveVideosFromChannelSecurity;
var RemoveVideosFromChannelRequest = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelRequest, _super);
    function RemoveVideosFromChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveVideosFromChannelPathParams)
    ], RemoveVideosFromChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveVideosFromChannelRequestBody)
    ], RemoveVideosFromChannelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveVideosFromChannelSecurity)
    ], RemoveVideosFromChannelRequest.prototype, "security", void 0);
    return RemoveVideosFromChannelRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromChannelRequest = RemoveVideosFromChannelRequest;
var RemoveVideosFromChannelResponse = /** @class */ (function (_super) {
    __extends(RemoveVideosFromChannelResponse, _super);
    function RemoveVideosFromChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveVideosFromChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveVideosFromChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], RemoveVideosFromChannelResponse.prototype, "legacyError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Video)
    ], RemoveVideosFromChannelResponse.prototype, "video", void 0);
    return RemoveVideosFromChannelResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromChannelResponse = RemoveVideosFromChannelResponse;
