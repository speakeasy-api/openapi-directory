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
exports.WebinarPanelistsResponse = exports.WebinarPanelistsRequest = exports.WebinarPanelistsPanelistList = exports.WebinarPanelistsPanelistListPanelists = exports.WebinarPanelistsSecurity = exports.WebinarPanelistsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPanelistsPathParams = /** @class */ (function (_super) {
    __extends(WebinarPanelistsPathParams, _super);
    function WebinarPanelistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPanelistsPathParams.prototype, "webinarId", void 0);
    return WebinarPanelistsPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistsPathParams = WebinarPanelistsPathParams;
var WebinarPanelistsSecurity = /** @class */ (function (_super) {
    __extends(WebinarPanelistsSecurity, _super);
    function WebinarPanelistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarPanelistsSecurity.prototype, "oAuth", void 0);
    return WebinarPanelistsSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistsSecurity = WebinarPanelistsSecurity;
// WebinarPanelistsPanelistListPanelists
/**
 * Panelist base object.
**/
var WebinarPanelistsPanelistListPanelists = /** @class */ (function (_super) {
    __extends(WebinarPanelistsPanelistListPanelists, _super);
    function WebinarPanelistsPanelistListPanelists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarPanelistsPanelistListPanelists.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarPanelistsPanelistListPanelists.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], WebinarPanelistsPanelistListPanelists.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPanelistsPanelistListPanelists.prototype, "name", void 0);
    return WebinarPanelistsPanelistListPanelists;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistsPanelistListPanelists = WebinarPanelistsPanelistListPanelists;
// WebinarPanelistsPanelistList
/**
 * List of panelists.
**/
var WebinarPanelistsPanelistList = /** @class */ (function (_super) {
    __extends(WebinarPanelistsPanelistList, _super);
    function WebinarPanelistsPanelistList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists", elemType: WebinarPanelistsPanelistListPanelists }),
        __metadata("design:type", Array)
    ], WebinarPanelistsPanelistList.prototype, "panelists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], WebinarPanelistsPanelistList.prototype, "totalRecords", void 0);
    return WebinarPanelistsPanelistList;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistsPanelistList = WebinarPanelistsPanelistList;
var WebinarPanelistsRequest = /** @class */ (function (_super) {
    __extends(WebinarPanelistsRequest, _super);
    function WebinarPanelistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistsPathParams)
    ], WebinarPanelistsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistsSecurity)
    ], WebinarPanelistsRequest.prototype, "security", void 0);
    return WebinarPanelistsRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistsRequest = WebinarPanelistsRequest;
var WebinarPanelistsResponse = /** @class */ (function (_super) {
    __extends(WebinarPanelistsResponse, _super);
    function WebinarPanelistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarPanelistsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarPanelistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistsPanelistList)
    ], WebinarPanelistsResponse.prototype, "panelistList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarPanelistsResponse.prototype, "statusCode", void 0);
    return WebinarPanelistsResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistsResponse = WebinarPanelistsResponse;
