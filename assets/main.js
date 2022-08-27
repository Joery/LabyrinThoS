"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Command = /** @class */ (function () {
    function Command(game) {
        this.game = game;
    }
    Command.prototype.execute = function (params) {
        return false;
    };
    return Command;
}());
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Default = /** @class */ (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.execute = function (params) {
        this.game.out.println("I don't know what you mean...");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go | quit | help | score");
        return false;
    };
    return Default;
}(Command));
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Game = /** @class */ (function () {
    function Game(output, input) {
        this.score = 0;
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createLabyrinth();
        this.printWelcome();
    }
    Game.prototype.createLabyrinth = function () {
        var r001 = new Room("");
        var r002 = new Room("");
        var r003 = new Room("");
        var r004 = new Room("");
        var r005 = new Room("");
        var r006 = new Room("");
        var r007 = new Room("");
        var r008 = new Room("");
        var r009 = new Room("");
        var r010 = new Room("");
        var r011 = new Room("");
        var r012 = new Room("");
        var r013 = new Room("");
        var r014 = new Room("");
        var r015 = new Room("");
        var r016 = new Room("");
        var r017 = new Room("");
        var r018 = new Room("");
        var r019 = new Room("");
        var r020 = new Room("");
        var r021 = new Room("");
        var r022 = new Room("");
        var r023 = new Room("");
        var r024 = new Room("");
        var r025 = new Room("");
        var r026 = new Room("");
        var r027 = new Room("");
        var r028 = new Room("");
        var r029 = new Room("");
        var r030 = new Room("");
        var r031 = new Room("");
        var r032 = new Room("");
        var r033 = new Room("");
        var r034 = new Room("");
        var r035 = new Room("");
        var r036 = new Room("");
        var r037 = new Room("");
        var r038 = new Room("");
        var r039 = new Room("");
        var r040 = new Room("");
        var r041 = new Room("");
        var r042 = new Room("");
        var r043 = new Room("");
        var r044 = new Room("");
        var r045 = new Room("");
        var r046 = new Room("");
        var r047 = new Room("");
        var r048 = new Room("");
        var r049 = new Room("");
        var r050 = new Room("");
        var r051 = new Room("");
        var r052 = new Room("");
        var r053 = new Room("");
        var r054 = new Room("");
        var r055 = new Room("");
        var r056 = new Room("");
        var r057 = new Room("");
        var r058 = new Room("");
        var r059 = new Room("");
        var r060 = new Room("");
        var r061 = new Room("");
        var r062 = new Room("");
        var r063 = new Room("");
        var r064 = new Room("");
        var r065 = new Room("");
        var r066 = new Room("");
        var r067 = new Room("");
        var r068 = new Room("");
        var r069 = new Room("");
        var r070 = new Room("");
        var r071 = new Room("");
        var r072 = new Room("");
        var r073 = new Room("");
        var r074 = new Room("");
        var r075 = new Room("");
        var r076 = new Room("");
        var r077 = new Room("");
        var r078 = new Room("");
        var r079 = new Room("");
        var r080 = new Room("");
        var r081 = new Room("");
        var r082 = new Room("");
        var r083 = new Room("");
        var r084 = new Room("");
        var r085 = new Room("");
        var r086 = new Room("");
        var r087 = new Room("");
        var r088 = new Room("");
        var r089 = new Room("");
        var r090 = new Room("");
        var r091 = new Room("");
        var r092 = new Room("");
        var r093 = new Room("");
        var r094 = new Room("");
        var r095 = new Room("");
        var r096 = new Room("");
        var r097 = new Room("");
        var r098 = new Room("");
        var r099 = new Room("");
        var r100 = new Room("");
        var r101 = new Room("");
        var r102 = new Room("");
        var r103 = new Room("");
        var r104 = new Room("");
        var r105 = new Room("");
        var r106 = new Room("");
        var r107 = new Room("");
        var r108 = new Room("");
        var r109 = new Room("");
        var r110 = new Room("");
        var r111 = new Room("");
        var r112 = new Room("");
        var r113 = new Room("");
        var r114 = new Room("");
        var r115 = new Room("");
        var r116 = new Room("");
        var r117 = new Room("");
        var r118 = new Room("");
        var r119 = new Room("");
        var r120 = new Room("");
        var r121 = new Room("");
        var r122 = new Room("");
        var r123 = new Room("");
        var r124 = new Room("");
        var r125 = new Room("");
        var r126 = new Room("");
        var r127 = new Room("");
        var r128 = new Room("");
        var r129 = new Room("");
        var r130 = new Room("");
        var r131 = new Room("");
        var r132 = new Room("");
        var r133 = new Room("");
        var r134 = new Room("");
        var r135 = new Room("");
        var r136 = new Room("");
        var r137 = new Room("");
        var r138 = new Room("");
        var r139 = new Room("");
        var r140 = new Room("");
        var r141 = new Room("");
        var r142 = new Room("");
        var r143 = new Room("");
        var r144 = new Room("");
        var r145 = new Room("");
        var r146 = new Room("");
        var r147 = new Room("");
        var r148 = new Room("");
        var r149 = new Room("");
        var r150 = new Room("");
        var r151 = new Room("");
        var r152 = new Room("");
        var r153 = new Room("");
        var r154 = new Room("");
        var r155 = new Room("");
        var r156 = new Room("");
        var r157 = new Room("");
        var r158 = new Room("");
        var r159 = new Room("");
        var r160 = new Room("");
        var r161 = new Room("");
        var r162 = new Room("");
        var r163 = new Room("");
        var r164 = new Room("");
        var r165 = new Room("");
        var r166 = new Room("");
        var r167 = new Room("");
        var r168 = new Room("");
        var r169 = new Room("");
        var r170 = new Room("");
        var r171 = new Room("");
        var r172 = new Room("");
        var r173 = new Room("");
        var r174 = new Room("");
        var r175 = new Room("");
        var r176 = new Room("");
        var r177 = new Room("");
        var r178 = new Room("");
        var r179 = new Room("");
        var r180 = new Room("");
        var r181 = new Room("");
        var r182 = new Room("");
        var r183 = new Room("");
        var r184 = new Room("");
        var r185 = new Room("");
        var r186 = new Room("");
        var r187 = new Room("");
        var r188 = new Room("");
        var r189 = new Room("");
        var r190 = new Room("");
        var r191 = new Room("");
        var r192 = new Room("");
        var r193 = new Room("");
        var r194 = new Room("");
        var r195 = new Room("");
        var r196 = new Room("");
        var r197 = new Room("");
        var r198 = new Room("");
        var r199 = new Room("");
        var r200 = new Room("");
        var r201 = new Room("");
        var r202 = new Room("");
        var r203 = new Room("");
        var r204 = new Room("");
        var r205 = new Room("");
        var r206 = new Room("");
        var r207 = new Room("");
        var r208 = new Room("");
        var r209 = new Room("");
        var r210 = new Room("");
        var r211 = new Room("");
        var r212 = new Room("");
        var r213 = new Room("");
        var r214 = new Room("");
        var r215 = new Room("");
        var r216 = new Room("");
        var r217 = new Room("");
        var r218 = new Room("");
        var r219 = new Room("");
        var r220 = new Room("");
        var r221 = new Room("");
        var r222 = new Room("");
        var r223 = new Room("");
        var r224 = new Room("");
        var r225 = new Room("");
        var r226 = new Room("");
        var r227 = new Room("");
        var r228 = new Room("");
        var r229 = new Room("");
        var r230 = new Room("");
        var r231 = new Room("");
        var r232 = new Room("");
        var r233 = new Room("");
        var r234 = new Room("");
        var r235 = new Room("");
        var r236 = new Room("");
        var r237 = new Room("");
        var r238 = new Room("");
        var r239 = new Room("");
        var r240 = new Room("");
        var r241 = new Room("");
        var r242 = new Room("");
        var r243 = new Room("");
        var r244 = new Room("");
        var r245 = new Room("");
        var r246 = new Room("");
        var r247 = new Room("");
        var r248 = new Room("");
        var r249 = new Room("");
        var r250 = new Room("");
        var r251 = new Room("");
        var r252 = new Room("");
        var r253 = new Room("");
        var r254 = new Room("");
        var r255 = new Room("");
        var r256 = new Room("");
        var r257 = new Room("");
        var r258 = new Room("");
        var r259 = new Room("");
        var r260 = new Room("");
        var r261 = new Room("");
        var r262 = new Room("");
        var r263 = new Room("");
        var r264 = new Room("");
        var r265 = new Room("");
        var r266 = new Room("");
        var r267 = new Room("");
        var r268 = new Room("");
        var r269 = new Room("");
        var r270 = new Room("");
        var r271 = new Room("");
        var r272 = new Room("");
        var r273 = new Room("");
        var r274 = new Room("");
        var r275 = new Room("");
        var r276 = new Room("");
        var r277 = new Room("");
        var r278 = new Room("");
        var r279 = new Room("");
        var r280 = new Room("");
        var r281 = new Room("");
        var r282 = new Room("");
        var r283 = new Room("");
        var r284 = new Room("");
        var r285 = new Room("");
        var r286 = new Room("");
        var r287 = new Room("");
        var r288 = new Room("");
        var r289 = new Room("");
        var r290 = new Room("");
        var r291 = new Room("");
        var r292 = new Room("");
        var r293 = new Room("");
        var r294 = new Room("");
        var r295 = new Room("");
        var r296 = new Room("");
        var r297 = new Room("");
        var r298 = new Room("");
        var r299 = new Room("");
        var r300 = new Room("");
        var r301 = new Room("");
        var r302 = new Room("");
        var r303 = new Room("");
        var r304 = new Room("");
        var r305 = new Room("");
        var r306 = new Room("");
        var r307 = new Room("");
        var r308 = new Room("");
        var r309 = new Room("");
        var r310 = new Room("");
        var r311 = new Room("");
        var r312 = new Room("");
        var r313 = new Room("");
        var r314 = new Room("");
        var r315 = new Room("");
        var r316 = new Room("");
        var r317 = new Room("");
        var r318 = new Room("");
        var r319 = new Room("");
        var r320 = new Room("");
        var r321 = new Room("");
        var r322 = new Room("");
        var r323 = new Room("");
        var r324 = new Room("");
        r001.setExits(r019, null, null, r002);
        r002.setExits(null, r001, null, r003);
        r003.setExits(r021, r002, null, null);
        r004.setExits(r022, null, null, r005);
        r005.setExits(null, r004, null, r006);
        r006.setExits(r024, r005, null, null);
        r007.setExits(null, null, null, r008);
        r008.setExits(r026, r007, null, r009);
        r009.setExits(null, r008, null, null);
        r010.setExits(r028, null, null, r011);
        r011.setExits(r029, r010, null, null);
        r012.setExits(r030, null, null, r013);
        r013.setExits(null, r012, null, r014);
        r014.setExits(null, r013, null, r015);
        r015.setExits(r033, r014, null, null);
        r016.setExits(r034, null, null, r017);
        r017.setExits(null, r016, null, r018);
        r018.setExits(r036, r017, null, null);
        r019.setExits(null, null, r001, null);
        r020.setExits(r038, null, null, r021);
        r021.setExits(null, r020, r003, null);
        r022.setExits(null, null, r004, r023);
        r023.setExits(r041, r022, null, null);
        r024.setExits(r042, null, r006, null);
        r025.setExits(r043, null, null, r026);
        r026.setExits(null, r025, null, r027);
        r027.setExits(r045, null, null, r028);
        r028.setExits(r046, r027, r010, null);
        r029.setExits(null, null, r011, r030);
        r030.setExits(null, r029, r012, r031);
        r031.setExits(null, r030, null, r032);
        r032.setExits(r050, r031, null, null);
        r033.setExits(null, null, r015, r034);
        r034.setExits(null, r033, r016, null);
        r035.setExits(r053, null, null, null);
        r036.setExits(r054, null, r018, null);
        r037.setExits(r055, null, null, r038);
        r038.setExits(null, r037, r020, null);
        r039.setExits(r057, null, null, r040);
        r040.setExits(null, r039, null, r041);
        r041.setExits(null, r040, r023, null);
        r042.setExits(null, null, r024, r043);
        r043.setExits(null, r042, r025, null);
        r044.setExits(r062, null, null, r045);
        r045.setExits(null, r044, r027, null);
        r046.setExits(null, null, r028, r047);
        r047.setExits(null, r046, null, r048);
        r048.setExits(null, r047, null, r049);
        r049.setExits(r067, r048, null, null);
        r050.setExits(null, null, r032, r051);
        r051.setExits(r069, r050, null, null);
        r052.setExits(r070, null, null, r053);
        r053.setExits(r071, r052, r035, null);
        r054.setExits(r072, null, r036, null);
        r055.setExits(r073, null, r037, null);
        r056.setExits(null, null, null, r057);
        r057.setExits(null, r056, r039, r058);
        r058.setExits(r076, r057, null, null);
        r059.setExits(r077, null, null, r060);
        r060.setExits(null, r059, null, r061);
        r061.setExits(null, r060, null, r062);
        r062.setExits(null, r061, r044, null);
        r063.setExits(r081, null, null, null);
        r064.setExits(r082, null, null, r065);
        r065.setExits(null, r064, null, r066);
        r066.setExits(null, r065, null, r067);
        r067.setExits(null, r066, r049, r068);
        r068.setExits(r086, r067, null, null);
        r069.setExits(r087, null, r051, null);
        r070.setExits(r088, null, r052, null);
        r071.setExits(null, null, r053, r072);
        r072.setExits(null, r071, r054, null);
        r073.setExits(r091, null, r055, r074);
        r074.setExits(null, r073, null, r075);
        r075.setExits(r093, r074, null, null);
        r076.setExits(r094, null, null, r077);
        r077.setExits(null, r076, r059, null);
        r078.setExits(r096, null, null, null);
        r079.setExits(r097, null, null, r080);
        r080.setExits(r098, r079, null, null);
        r081.setExits(r099, null, r063, r082);
        r082.setExits(null, r081, r064, null);
        r083.setExits(r101, null, null, r084);
        r084.setExits(r102, r083, null, null);
        r085.setExits(r103, null, null, null);
        r086.setExits(r104, null, r068, null);
        r087.setExits(r105, null, r069, null);
        r088.setExits(null, null, r070, r089);
        r089.setExits(null, r088, null, r090);
        r090.setExits(r108, r089, null, null);
        r091.setExits(null, null, r073, null);
        r092.setExits(r110, null, null, r093);
        r093.setExits(null, r092, r075, null);
        r094.setExits(r112, null, r076, null);
        r095.setExits(r113, null, null, r096);
        r096.setExits(null, r095, r078, r097);
        r097.setExits(null, r096, r079, null);
        r098.setExits(null, null, r080, r099);
        r099.setExits(null, r098, r081, null);
        r100.setExits(r118, null, null, r101);
        r101.setExits(null, r100, r083, null);
        r102.setExits(r120, null, r084, null);
        r103.setExits(null, null, r085, r104);
        r104.setExits(null, r103, r086, null);
        r105.setExits(r123, null, r087, null);
        r106.setExits(r124, null, null, r107);
        r107.setExits(r125, r106, null, null);
        r108.setExits(r126, null, r090, null);
        r109.setExits(r127, null, null, r110);
        r110.setExits(null, r109, r092, null);
        r111.setExits(r129, null, null, r112);
        r112.setExits(null, r111, r094, null);
        r113.setExits(null, null, r095, r114);
        r114.setExits(r132, r113, null, null);
        r115.setExits(r133, null, null, r116);
        r116.setExits(null, r115, null, r117);
        r117.setExits(null, r116, null, r118);
        r118.setExits(null, r117, r100, null);
        r119.setExits(r137, null, null, null);
        r120.setExits(null, null, r102, r121);
        r121.setExits(null, r120, null, r122);
        r122.setExits(null, r121, null, r123);
        r123.setExits(null, r122, r105, null);
        r124.setExits(r142, null, r106, null);
        r125.setExits(r143, null, r107, null);
        r126.setExits(r144, null, r108, null);
        r127.setExits(null, null, r109, r128);
        r128.setExits(r146, r127, null, null);
        r129.setExits(r147, null, r111, null);
        r130.setExits(r148, null, null, r131);
        r131.setExits(null, r130, null, r132);
        r132.setExits(null, r131, r114, null);
        r133.setExits(r151, null, r115, null);
        r134.setExits(r152, null, null, r135);
        r135.setExits(r153, r134, null, null);
        r136.setExits(null, null, null, r137);
        r137.setExits(r155, r136, r119, r138);
        r138.setExits(r156, r137, null, null);
        r139.setExits(r157, null, null, r140);
        r140.setExits(null, r139, null, r141);
        r141.setExits(null, r140, null, r142);
        r142.setExits(null, r141, r124, null);
        r143.setExits(null, null, r125, r144);
        r144.setExits(null, r143, r126, null);
        r145.setExits(r163, null, null, null);
        r146.setExits(r164, null, r128, null);
        r147.setExits(r165, null, r129, null);
        r148.setExits(r166, null, r130, null);
        r149.setExits(r167, null, null, r150);
        r150.setExits(null, r149, null, null);
        r151.setExits(r169, null, r133, null);
        r152.setExits(r170, null, r134, null);
        r153.setExits(null, null, r135, r154);
        r154.setExits(null, r153, null, r155);
        r155.setExits(null, r154, r137, null);
        r156.setExits(null, null, r138, r157);
        r157.setExits(null, r156, r139, null);
        r158.setExits(r176, null, null, r159);
        r159.setExits(null, r158, null, r160);
        r160.setExits(r178, r159, null, null);
        r161.setExits(r179, null, null, r162);
        r162.setExits(r180, r161, null, null);
        r163.setExits(r181, null, r145, null);
        r164.setExits(null, null, r146, r165);
        r165.setExits(null, r164, r147, null);
        r166.setExits(r184, null, r148, null);
        r167.setExits(r185, null, r149, null);
        r168.setExits(r186, null, null, r169);
        r169.setExits(null, r168, r151, null);
        r170.setExits(null, null, r152, r171);
        r171.setExits(r189, r170, null, null);
        r172.setExits(r190, null, null, r173);
        r173.setExits(null, r172, null, r174);
        r174.setExits(null, r173, null, r175);
        r175.setExits(r193, r174, null, null);
        r176.setExits(null, null, r158, r177);
        r177.setExits(null, r176, null, null);
        r178.setExits(null, null, r160, r179);
        r179.setExits(null, r178, r161, null);
        r180.setExits(r198, null, r162, null);
        r181.setExits(r199, null, r163, r182);
        r182.setExits(null, r181, null, r183);
        r183.setExits(r201, r182, null, null);
        r184.setExits(r202, null, r166, null);
        r185.setExits(r203, null, r167, null);
        r186.setExits(r204, null, r168, null);
        r187.setExits(r205, null, null, r188);
        r188.setExits(null, r187, null, r189);
        r189.setExits(null, r188, r171, null);
        r190.setExits(r208, null, r172, null);
        r191.setExits(r209, null, null, r192);
        r192.setExits(r210, r191, null, null);
        r193.setExits(r211, null, r175, null);
        r194.setExits(r212, null, null, r195);
        r195.setExits(null, r194, null, r196);
        r196.setExits(null, r195, null, r197);
        r197.setExits(r215, r196, null, null);
        r198.setExits(r216, null, r180, null);
        r199.setExits(r217, null, r181, null);
        r200.setExits(null, null, null, r201);
        r201.setExits(null, r200, r183, null);
        r202.setExits(null, null, r184, r203);
        r203.setExits(null, r202, r185, null);
        r204.setExits(r222, null, r186, null);
        r205.setExits(r223, null, r187, null);
        r206.setExits(r224, null, null, r207);
        r207.setExits(r225, r206, null, null);
        r208.setExits(r226, null, r190, null);
        r209.setExits(r227, null, r191, null);
        r210.setExits(r228, null, r192, null);
        r211.setExits(r229, null, r193, null);
        r212.setExits(r230, null, r194, null);
        r213.setExits(r231, null, null, r214);
        r214.setExits(r232, r213, null, null);
        r215.setExits(r233, null, r197, null);
        r216.setExits(r234, null, r198, null);
        r217.setExits(null, null, r199, r218);
        r218.setExits(null, r217, null, r219);
        r219.setExits(r237, r218, null, null);
        r220.setExits(r238, null, null, r221);
        r221.setExits(r239, r220, null, null);
        r222.setExits(r240, null, r204, null);
        r223.setExits(r241, null, r205, null);
        r224.setExits(r242, null, r206, null);
        r225.setExits(null, null, r207, null);
        r226.setExits(r244, null, r208, null);
        r227.setExits(r245, null, r209, null);
        r228.setExits(r246, null, r210, null);
        r229.setExits(null, null, r211, r230);
        r230.setExits(null, r229, r212, null);
        r231.setExits(r249, null, r213, null);
        r232.setExits(r250, null, r214, null);
        r233.setExits(r251, null, r215, r234);
        r234.setExits(null, r233, r216, null);
        r235.setExits(r253, null, null, r236);
        r236.setExits(null, r235, null, r237);
        r237.setExits(null, r236, r219, null);
        r238.setExits(r256, null, r220, null);
        r239.setExits(r257, null, r221, null);
        r240.setExits(r258, null, r222, null);
        r241.setExits(r259, null, r223, null);
        r242.setExits(r260, null, r224, null);
        r243.setExits(r261, null, null, r244);
        r244.setExits(null, r243, r226, null);
        r245.setExits(r263, null, r227, null);
        r246.setExits(null, null, r228, r247);
        r247.setExits(null, r246, null, r248);
        r248.setExits(r266, r247, null, r249);
        r249.setExits(null, r248, r231, null);
        r250.setExits(null, null, r232, null);
        r251.setExits(null, null, r233, r252);
        r252.setExits(r270, r251, null, null);
        r253.setExits(r271, null, r235, null);
        r254.setExits(r272, null, null, r255);
        r255.setExits(null, r254, null, r256);
        r256.setExits(null, r255, r238, null);
        r257.setExits(null, null, r239, null);
        r258.setExits(r276, null, r240, null);
        r259.setExits(null, null, r241, r260);
        r260.setExits(null, r259, r242, null);
        r261.setExits(r279, null, r243, null);
        r262.setExits(r280, null, null, r263);
        r263.setExits(null, r262, r245, null);
        r264.setExits(r282, null, null, r265);
        r265.setExits(r283, r264, null, null);
        r266.setExits(r284, null, r248, null);
        r267.setExits(r285, null, null, null);
        r268.setExits(r286, null, null, r269);
        r269.setExits(null, r268, null, r270);
        r270.setExits(null, r269, r252, null);
        r271.setExits(r289, null, r253, null);
        r272.setExits(r290, null, r254, null);
        r273.setExits(r291, null, null, r274);
        r274.setExits(r292, r273, null, r275);
        r275.setExits(null, r274, null, r276);
        r276.setExits(null, r275, r258, r277);
        r277.setExits(null, r276, null, r278);
        r278.setExits(null, r277, null, r279);
        r279.setExits(null, r278, r261, null);
        r280.setExits(null, null, r262, r281);
        r281.setExits(r299, r280, null, null);
        r282.setExits(r300, null, r264, null);
        r283.setExits(r301, null, r265, null);
        r284.setExits(r302, null, r266, null);
        r285.setExits(r303, null, r267, null);
        r286.setExits(null, null, r268, r287);
        r287.setExits(null, r286, null, r288);
        r288.setExits(r306, r287, null, null);
        r289.setExits(r307, null, r271, null);
        r290.setExits(r308, null, r272, null);
        r291.setExits(r309, null, r273, null);
        r292.setExits(r310, null, r274, null);
        r293.setExits(r311, null, null, r294);
        r294.setExits(r312, r293, null, null);
        r295.setExits(null, null, null, r296);
        r296.setExits(null, r295, null, r297);
        r297.setExits(r315, r296, null, r298);
        r298.setExits(r316, r297, null, null);
        r299.setExits(r317, null, r281, null);
        r300.setExits(r318, null, r282, null);
        r301.setExits(null, null, r283, null);
        r302.setExits(null, null, r284, r303);
        r303.setExits(null, r302, r285, r304);
        r304.setExits(null, r303, null, r305);
        r305.setExits(r323, r304, null, null);
        r306.setExits(r324, null, r288, null);
        r307.setExits(null, null, r289, r308);
        r308.setExits(null, r307, r290, r309);
        r309.setExits(null, r308, r291, null);
        r310.setExits(null, null, r292, r311);
        r311.setExits(null, r310, r293, null);
        r312.setExits(null, null, r294, r313);
        r313.setExits(null, r312, null, r314);
        r314.setExits(null, r313, null, r315);
        r315.setExits(null, r314, r297, null);
        r316.setExits(null, null, r298, null);
        r317.setExits(null, null, r299, null);
        r318.setExits(null, null, r300, r319);
        r319.setExits(null, r318, null, r320);
        r320.setExits(null, r319, null, r321);
        r321.setExits(null, r320, null, r322);
        r322.setExits(null, r321, null, r323);
        r323.setExits(null, r322, r305, r324);
        r324.setExits(null, r323, r306, null);
        var startRooms = [r001, r018, r307, r324];
        var selectRoom = startRooms[Math.floor(Math.random() * startRooms.length)];
        this.currentRoom = selectRoom;
        var exitRooms = [r119, r150, r177, r225];
        var selectExit = exitRooms[Math.floor(Math.random() * exitRooms.length)];
        this.exitRoom = selectExit;
        this.teleportRooms = [r019, r035, r085, r145, r250, r317];
    };
    Game.prototype.printWelcome = function () {
        this.out.println("Welcome to the world of LabyrinThoS.");
        this.out.println("LabyrinThoS is a text-based adventure game written in TypeScript.");
        this.out.println("Type 'help' if you need help.");
        this.out.println("Pen and paper are recommended.");
        this.out.println();
        this.out.print("Paths: ");
        if (this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if (this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if (this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if (this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        this.out.println();
        this.out.print(">");
    };
    Game.prototype.gameOver = function () {
        this.isOn = false;
        this.out.println("Thank you for playing. Goodbye.");
        this.out.println("Press F5 to restart the game.");
    };
    Game.prototype.deathByTrap = function () {
        this.isOn = false;
        this.out.println("You ran into a trap and died.");
        this.out.println("Press F5 to try again.");
        this.parser.input.disabled = true;
        throw new Error();
    };
    Game.prototype.deathByMonster = function () {
        this.isOn = false;
        this.out.println("You ran into a monster and died.");
        this.out.println("Press F5 to try again.");
        this.parser.input.disabled = true;
        throw new Error();
    };
    Game.prototype.wheelOfFortune = function () {
        var toDieOrNotToDie = Math.random();
        if (toDieOrNotToDie < 0.02) {
            this.deathByTrap();
        }
        else if (toDieOrNotToDie < 0.04) {
            this.deathByMonster();
        }
        else {
            //
        }
    };
    Game.prototype.victoryCheck = function () {
        if (this.exitRoom == this.currentRoom) {
            this.victory();
        }
        else {
            //
        }
    };
    Game.prototype.victory = function () {
        this.isOn = false;
        this.out.println("You escaped the labyrinth!");
        this.out.println("Press F5 to play again.");
        this.out.println("Taken steps to the exit: " + this.score);
        this.parser.input.disabled = true;
        throw new Error();
    };
    Game.prototype.teleportCheck = function () {
        this.teleportRooms.indexOf(this.currentRoom);
        if (this.teleportRooms.indexOf(this.currentRoom) === -1) {
            //
        }
        else {
            this.teleport();
        }
    };
    Game.prototype.teleport = function () {
        var selectTeleport = this.teleportRooms[Math.floor(Math.random() * this.teleportRooms.length)];
        this.currentRoom = selectTeleport;
        this.out.println("You have been teleported!");
    };
    return Game;
}());
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Parser = /** @class */ (function () {
    function Parser(game, input) {
        var _this = this;
        this.commands = {};
        this.game = game;
        this.input = input;
        this.default = new Default(game);
        this.commands["go"] = new Go(game);
        this.commands["help"] = new Help(game);
        this.commands["quit"] = new Quit(game);
        this.commands["score"] = new Score(game);
        input.onkeyup = function (e) {
            if (e.keyCode == 13 && _this.game.isOn) {
                var commands = _this.input.value;
                _this.game.out.println(commands);
                _this.parse(commands.split(" "));
                _this.input.value = "";
                _this.game.out.print(">");
            }
        };
    }
    Parser.prototype.parse = function (words) {
        var wantToQuit = false;
        var params = words.slice(1);
        if (words[0] == "") {
            return;
        }
        var command;
        command = this.commands[words[0]];
        if (command == null) {
            command = this.default;
        }
        wantToQuit = command.execute(params);
        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    };
    return Parser;
}());
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Printer = /** @class */ (function () {
    function Printer(output) {
        this.output = output;
    }
    Printer.prototype.print = function (text) {
        this.output.innerHTML += text;
    };
    Printer.prototype.println = function (text) {
        if (text === void 0) { text = ""; }
        this.print(text + "<br/>");
        this.output.scrollTop = this.output.scrollHeight;
    };
    return Printer;
}());
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Room = /** @class */ (function () {
    function Room(description) {
        this.description = description;
    }
    Room.prototype.setExits = function (north, east, south, west) {
        if (north != null) {
            this.northExit = north;
        }
        if (east != null) {
            this.eastExit = east;
        }
        if (south != null) {
            this.southExit = south;
        }
        if (west != null) {
            this.westExit = west;
        }
    };
    return Room;
}());
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Go = /** @class */ (function (_super) {
    __extends(Go, _super);
    function Go() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Go.prototype.execute = function (params) {
        if (params.length == 0) {
            this.game.out.println("Go where?");
            return;
        }
        var direction = params[0];
        var nextRoom = null;
        switch (direction) {
            case "north":
                nextRoom = this.game.currentRoom.northExit;
                break;
            case "east":
                nextRoom = this.game.currentRoom.eastExit;
                break;
            case "south":
                nextRoom = this.game.currentRoom.southExit;
                break;
            case "west":
                nextRoom = this.game.currentRoom.westExit;
                break;
        }
        if (nextRoom == null) {
            this.game.out.println("There is no path");
        }
        else {
            this.game.currentRoom = nextRoom;
            this.game.out.println(this.game.currentRoom.description);
            this.game.score++;
            this.game.teleportCheck();
            this.game.victoryCheck();
            this.game.wheelOfFortune();
            this.game.out.print("Paths: ");
            if (this.game.currentRoom.northExit != null) {
                this.game.out.print("north ");
            }
            if (this.game.currentRoom.eastExit != null) {
                this.game.out.print("east ");
            }
            if (this.game.currentRoom.southExit != null) {
                this.game.out.print("south ");
            }
            if (this.game.currentRoom.westExit != null) {
                this.game.out.print("west ");
            }
            this.game.out.println();
        }
        return false;
    };
    return Go;
}(Command));
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Help = /** @class */ (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("You are lost. You are alone.");
        this.game.out.println("You wander around in the labyrinth.");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go | quit | help | score");
        return false;
    };
    return Help;
}(Command));
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Quit = /** @class */ (function (_super) {
    __extends(Quit, _super);
    function Quit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quit.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Quit what?");
            return false;
        }
        else {
            return true;
        }
    };
    return Quit;
}(Command));
/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */
var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Score.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("What score?");
            return false;
        }
        this.game.out.println("Taken steps: " + this.game.score);
        return false;
    };
    return Score;
}(Command));
