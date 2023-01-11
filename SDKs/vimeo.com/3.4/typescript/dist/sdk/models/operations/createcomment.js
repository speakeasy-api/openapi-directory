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
exports.CreateCommentResponse = exports.CreateCommentRequest = exports.CreateCommentSecurity = exports.CreateCommentRequestBody = exports.CreateCommentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateCommentPathParams = /** @class */ (function (_super) {
    __extends(CreateCommentPathParams, _super);
    function CreateCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateCommentPathParams.prototype, "videoId", void 0);
    return CreateCommentPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateCommentPathParams = CreateCommentPathParams;
var CreateCommentRequestBody = /** @class */ (function (_super) {
    __extends(CreateCommentRequestBody, _super);
    function CreateCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], CreateCommentRequestBody.prototype, "text", void 0);
    return CreateCommentRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateCommentRequestBody = CreateCommentRequestBody;
var CreateCommentSecurity = /** @class */ (function (_super) {
    __extends(CreateCommentSecurity, _super);
    function CreateCommentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateCommentSecurity.prototype, "oauth2", void 0);
    return CreateCommentSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateCommentSecurity = CreateCommentSecurity;
var CreateCommentRequest = /** @class */ (function (_super) {
    __extends(CreateCommentRequest, _super);
    function CreateCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCommentPathParams)
    ], CreateCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/vnd.vimeo.comment+json" }),
        __metadata("design:type", CreateCommentRequestBody)
    ], CreateCommentRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCommentSecurity)
    ], CreateCommentRequest.prototype, "security", void 0);
    return CreateCommentRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCommentRequest = CreateCommentRequest;
var CreateCommentResponse = /** @class */ (function (_super) {
    __extends(CreateCommentResponse, _super);
    function CreateCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCommentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Comment)
    ], CreateCommentResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], CreateCommentResponse.prototype, "error", void 0);
    return CreateCommentResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCommentResponse = CreateCommentResponse;
