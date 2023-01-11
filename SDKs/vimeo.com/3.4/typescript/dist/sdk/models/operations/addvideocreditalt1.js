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
exports.AddVideoCreditAlt1Response = exports.AddVideoCreditAlt1Request = exports.AddVideoCreditAlt1RequestBody = exports.AddVideoCreditAlt1PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddVideoCreditAlt1PathParams = /** @class */ (function (_super) {
    __extends(AddVideoCreditAlt1PathParams, _super);
    function AddVideoCreditAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], AddVideoCreditAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], AddVideoCreditAlt1PathParams.prototype, "videoId", void 0);
    return AddVideoCreditAlt1PathParams;
}(utils_1.SpeakeasyBase));
exports.AddVideoCreditAlt1PathParams = AddVideoCreditAlt1PathParams;
var AddVideoCreditAlt1RequestBody = /** @class */ (function (_super) {
    __extends(AddVideoCreditAlt1RequestBody, _super);
    function AddVideoCreditAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddVideoCreditAlt1RequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddVideoCreditAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], AddVideoCreditAlt1RequestBody.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_uri" }),
        __metadata("design:type", String)
    ], AddVideoCreditAlt1RequestBody.prototype, "userUri", void 0);
    return AddVideoCreditAlt1RequestBody;
}(utils_1.SpeakeasyBase));
exports.AddVideoCreditAlt1RequestBody = AddVideoCreditAlt1RequestBody;
var AddVideoCreditAlt1Request = /** @class */ (function (_super) {
    __extends(AddVideoCreditAlt1Request, _super);
    function AddVideoCreditAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddVideoCreditAlt1PathParams)
    ], AddVideoCreditAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/vnd.vimeo.credit+json" }),
        __metadata("design:type", AddVideoCreditAlt1RequestBody)
    ], AddVideoCreditAlt1Request.prototype, "request", void 0);
    return AddVideoCreditAlt1Request;
}(utils_1.SpeakeasyBase));
exports.AddVideoCreditAlt1Request = AddVideoCreditAlt1Request;
var AddVideoCreditAlt1Response = /** @class */ (function (_super) {
    __extends(AddVideoCreditAlt1Response, _super);
    function AddVideoCreditAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddVideoCreditAlt1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddVideoCreditAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Credit)
    ], AddVideoCreditAlt1Response.prototype, "credit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], AddVideoCreditAlt1Response.prototype, "legacyError", void 0);
    return AddVideoCreditAlt1Response;
}(utils_1.SpeakeasyBase));
exports.AddVideoCreditAlt1Response = AddVideoCreditAlt1Response;
