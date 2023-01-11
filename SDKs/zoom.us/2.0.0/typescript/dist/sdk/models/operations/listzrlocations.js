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
exports.ListZrLocationsResponse = exports.ListZrLocationsRequest = exports.ListZrLocations200ApplicationJson = exports.ListZrLocations200ApplicationJsonLocations = exports.ListZrLocations200ApplicationJsonLocationsTypeEnum = exports.ListZrLocationsSecurity = exports.ListZrLocationsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListZrLocationsQueryParams = /** @class */ (function (_super) {
    __extends(ListZrLocationsQueryParams, _super);
    function ListZrLocationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListZrLocationsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListZrLocationsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=parent_location_id" }),
        __metadata("design:type", String)
    ], ListZrLocationsQueryParams.prototype, "parentLocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListZrLocationsQueryParams.prototype, "type", void 0);
    return ListZrLocationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListZrLocationsQueryParams = ListZrLocationsQueryParams;
var ListZrLocationsSecurity = /** @class */ (function (_super) {
    __extends(ListZrLocationsSecurity, _super);
    function ListZrLocationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListZrLocationsSecurity.prototype, "oAuth", void 0);
    return ListZrLocationsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListZrLocationsSecurity = ListZrLocationsSecurity;
var ListZrLocations200ApplicationJsonLocationsTypeEnum;
(function (ListZrLocations200ApplicationJsonLocationsTypeEnum) {
    ListZrLocations200ApplicationJsonLocationsTypeEnum["Country"] = "country";
    ListZrLocations200ApplicationJsonLocationsTypeEnum["States"] = "states";
    ListZrLocations200ApplicationJsonLocationsTypeEnum["City"] = "city";
    ListZrLocations200ApplicationJsonLocationsTypeEnum["Campus"] = "campus";
    ListZrLocations200ApplicationJsonLocationsTypeEnum["Building"] = "building";
    ListZrLocations200ApplicationJsonLocationsTypeEnum["Floor"] = "floor";
})(ListZrLocations200ApplicationJsonLocationsTypeEnum = exports.ListZrLocations200ApplicationJsonLocationsTypeEnum || (exports.ListZrLocations200ApplicationJsonLocationsTypeEnum = {}));
var ListZrLocations200ApplicationJsonLocations = /** @class */ (function (_super) {
    __extends(ListZrLocations200ApplicationJsonLocations, _super);
    function ListZrLocations200ApplicationJsonLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListZrLocations200ApplicationJsonLocations.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListZrLocations200ApplicationJsonLocations.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_location_id" }),
        __metadata("design:type", String)
    ], ListZrLocations200ApplicationJsonLocations.prototype, "parentLocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListZrLocations200ApplicationJsonLocations.prototype, "type", void 0);
    return ListZrLocations200ApplicationJsonLocations;
}(utils_1.SpeakeasyBase));
exports.ListZrLocations200ApplicationJsonLocations = ListZrLocations200ApplicationJsonLocations;
var ListZrLocations200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListZrLocations200ApplicationJson, _super);
    function ListZrLocations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locations", elemType: ListZrLocations200ApplicationJsonLocations }),
        __metadata("design:type", Array)
    ], ListZrLocations200ApplicationJson.prototype, "locations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListZrLocations200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListZrLocations200ApplicationJson.prototype, "pageSize", void 0);
    return ListZrLocations200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListZrLocations200ApplicationJson = ListZrLocations200ApplicationJson;
var ListZrLocationsRequest = /** @class */ (function (_super) {
    __extends(ListZrLocationsRequest, _super);
    function ListZrLocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZrLocationsQueryParams)
    ], ListZrLocationsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZrLocationsSecurity)
    ], ListZrLocationsRequest.prototype, "security", void 0);
    return ListZrLocationsRequest;
}(utils_1.SpeakeasyBase));
exports.ListZrLocationsRequest = ListZrLocationsRequest;
var ListZrLocationsResponse = /** @class */ (function (_super) {
    __extends(ListZrLocationsResponse, _super);
    function ListZrLocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListZrLocationsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListZrLocationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListZrLocationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZrLocations200ApplicationJson)
    ], ListZrLocationsResponse.prototype, "listZRLocations200ApplicationJSONObject", void 0);
    return ListZrLocationsResponse;
}(utils_1.SpeakeasyBase));
exports.ListZrLocationsResponse = ListZrLocationsResponse;
