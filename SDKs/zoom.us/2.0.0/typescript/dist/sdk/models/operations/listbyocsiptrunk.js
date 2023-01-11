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
exports.ListByocsipTrunkResponse = exports.ListByocsipTrunkRequest = exports.ListByocsipTrunk200ApplicationJson = exports.ListByocsipTrunk200ApplicationJsonByocSipTrunk = exports.ListByocsipTrunkSecurity = exports.ListByocsipTrunkQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListByocsipTrunkQueryParams = /** @class */ (function (_super) {
    __extends(ListByocsipTrunkQueryParams, _super);
    function ListByocsipTrunkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListByocsipTrunkQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListByocsipTrunkQueryParams.prototype, "pageSize", void 0);
    return ListByocsipTrunkQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListByocsipTrunkQueryParams = ListByocsipTrunkQueryParams;
var ListByocsipTrunkSecurity = /** @class */ (function (_super) {
    __extends(ListByocsipTrunkSecurity, _super);
    function ListByocsipTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListByocsipTrunkSecurity.prototype, "oAuth", void 0);
    return ListByocsipTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.ListByocsipTrunkSecurity = ListByocsipTrunkSecurity;
var ListByocsipTrunk200ApplicationJsonByocSipTrunk = /** @class */ (function (_super) {
    __extends(ListByocsipTrunk200ApplicationJsonByocSipTrunk, _super);
    function ListByocsipTrunk200ApplicationJsonByocSipTrunk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJsonByocSipTrunk.prototype, "carrier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_account" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJsonByocSipTrunk.prototype, "carrierAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJsonByocSipTrunk.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJsonByocSipTrunk.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJsonByocSipTrunk.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sbc_label" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJsonByocSipTrunk.prototype, "sbcLabel", void 0);
    return ListByocsipTrunk200ApplicationJsonByocSipTrunk;
}(utils_1.SpeakeasyBase));
exports.ListByocsipTrunk200ApplicationJsonByocSipTrunk = ListByocsipTrunk200ApplicationJsonByocSipTrunk;
var ListByocsipTrunk200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListByocsipTrunk200ApplicationJson, _super);
    function ListByocsipTrunk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byoc_sip_trunk", elemType: ListByocsipTrunk200ApplicationJsonByocSipTrunk }),
        __metadata("design:type", Array)
    ], ListByocsipTrunk200ApplicationJson.prototype, "byocSipTrunk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListByocsipTrunk200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListByocsipTrunk200ApplicationJson.prototype, "pageSize", void 0);
    return ListByocsipTrunk200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListByocsipTrunk200ApplicationJson = ListByocsipTrunk200ApplicationJson;
var ListByocsipTrunkRequest = /** @class */ (function (_super) {
    __extends(ListByocsipTrunkRequest, _super);
    function ListByocsipTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListByocsipTrunkQueryParams)
    ], ListByocsipTrunkRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListByocsipTrunkSecurity)
    ], ListByocsipTrunkRequest.prototype, "security", void 0);
    return ListByocsipTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.ListByocsipTrunkRequest = ListByocsipTrunkRequest;
var ListByocsipTrunkResponse = /** @class */ (function (_super) {
    __extends(ListByocsipTrunkResponse, _super);
    function ListByocsipTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListByocsipTrunkResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListByocsipTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListByocsipTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListByocsipTrunk200ApplicationJson)
    ], ListByocsipTrunkResponse.prototype, "listBYOCSIPTrunk200ApplicationJSONObject", void 0);
    return ListByocsipTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.ListByocsipTrunkResponse = ListByocsipTrunkResponse;
