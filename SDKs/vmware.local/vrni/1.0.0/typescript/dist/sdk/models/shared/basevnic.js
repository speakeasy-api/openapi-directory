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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVnic = void 0;
var utils_1 = require("../../../internal/utils");
var entitytypeenum_1 = require("./entitytypeenum");
var ipv4address_1 = require("./ipv4address");
var reference_1 = require("./reference");
var vlan_1 = require("./vlan");
var BaseVnic = /** @class */ (function (_super) {
    __extends(BaseVnic, _super);
    function BaseVnic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], BaseVnic.prototype, "entityId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], BaseVnic.prototype, "entityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses", elemType: ipv4address_1.IpV4Address }),
        __metadata("design:type", Array)
    ], BaseVnic.prototype, "ipAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=layer2_network" }),
        __metadata("design:type", reference_1.Reference)
    ], BaseVnic.prototype, "layer2Network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BaseVnic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlan" }),
        __metadata("design:type", vlan_1.Vlan)
    ], BaseVnic.prototype, "vlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vm" }),
        __metadata("design:type", reference_1.Reference)
    ], BaseVnic.prototype, "vm", void 0);
    return BaseVnic;
}(utils_1.SpeakeasyBase));
exports.BaseVnic = BaseVnic;
