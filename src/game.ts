/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Game {
    parser : Parser;
    out : Printer;
    currentRoom : Room;
    exitRoom : Room;
    teleportRooms : Room[]; // Array
    isOn : boolean;
    score : number = 0;

    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createLabyrinth();
        this.printWelcome();
    }

    createLabyrinth() : void {
        let r001 = new Room("");
        let r002 = new Room("");
        let r003 = new Room("");
        let r004 = new Room("");
        let r005 = new Room("");
        let r006 = new Room("");
        let r007 = new Room("");
        let r008 = new Room("");
        let r009 = new Room("");
        let r010 = new Room("");
        let r011 = new Room("");
        let r012 = new Room("");
        let r013 = new Room("");
        let r014 = new Room("");
        let r015 = new Room("");
        let r016 = new Room("");
        let r017 = new Room("");
        let r018 = new Room("");
        let r019 = new Room("");
        let r020 = new Room("");
        let r021 = new Room("");
        let r022 = new Room("");
        let r023 = new Room("");
        let r024 = new Room("");
        let r025 = new Room("");
        let r026 = new Room("");
        let r027 = new Room("");
        let r028 = new Room("");
        let r029 = new Room("");
        let r030 = new Room("");
        let r031 = new Room("");
        let r032 = new Room("");
        let r033 = new Room("");
        let r034 = new Room("");
        let r035 = new Room("");
        let r036 = new Room("");
        let r037 = new Room("");
        let r038 = new Room("");
        let r039 = new Room("");
        let r040 = new Room("");
        let r041 = new Room("");
        let r042 = new Room("");
        let r043 = new Room("");
        let r044 = new Room("");
        let r045 = new Room("");
        let r046 = new Room("");
        let r047 = new Room("");
        let r048 = new Room("");
        let r049 = new Room("");
        let r050 = new Room("");
        let r051 = new Room("");
        let r052 = new Room("");
        let r053 = new Room("");
        let r054 = new Room("");
        let r055 = new Room("");
        let r056 = new Room("");
        let r057 = new Room("");
        let r058 = new Room("");
        let r059 = new Room("");
        let r060 = new Room("");
        let r061 = new Room("");
        let r062 = new Room("");
        let r063 = new Room("");
        let r064 = new Room("");
        let r065 = new Room("");
        let r066 = new Room("");
        let r067 = new Room("");
        let r068 = new Room("");
        let r069 = new Room("");
        let r070 = new Room("");
        let r071 = new Room("");
        let r072 = new Room("");
        let r073 = new Room("");
        let r074 = new Room("");
        let r075 = new Room("");
        let r076 = new Room("");
        let r077 = new Room("");
        let r078 = new Room("");
        let r079 = new Room("");
        let r080 = new Room("");
        let r081 = new Room("");
        let r082 = new Room("");
        let r083 = new Room("");
        let r084 = new Room("");
        let r085 = new Room("");
        let r086 = new Room("");
        let r087 = new Room("");
        let r088 = new Room("");
        let r089 = new Room("");
        let r090 = new Room("");
        let r091 = new Room("");
        let r092 = new Room("");
        let r093 = new Room("");
        let r094 = new Room("");
        let r095 = new Room("");
        let r096 = new Room("");
        let r097 = new Room("");
        let r098 = new Room("");
        let r099 = new Room("");
        let r100 = new Room("");
        let r101 = new Room("");
        let r102 = new Room("");
        let r103 = new Room("");
        let r104 = new Room("");
        let r105 = new Room("");
        let r106 = new Room("");
        let r107 = new Room("");
        let r108 = new Room("");
        let r109 = new Room("");
        let r110 = new Room("");
        let r111 = new Room("");
        let r112 = new Room("");
        let r113 = new Room("");
        let r114 = new Room("");
        let r115 = new Room("");
        let r116 = new Room("");
        let r117 = new Room("");
        let r118 = new Room("");
        let r119 = new Room("");
        let r120 = new Room("");
        let r121 = new Room("");
        let r122 = new Room("");
        let r123 = new Room("");
        let r124 = new Room("");
        let r125 = new Room("");
        let r126 = new Room("");
        let r127 = new Room("");
        let r128 = new Room("");
        let r129 = new Room("");
        let r130 = new Room("");
        let r131 = new Room("");
        let r132 = new Room("");
        let r133 = new Room("");
        let r134 = new Room("");
        let r135 = new Room("");
        let r136 = new Room("");
        let r137 = new Room("");
        let r138 = new Room("");
        let r139 = new Room("");
        let r140 = new Room("");
        let r141 = new Room("");
        let r142 = new Room("");
        let r143 = new Room("");
        let r144 = new Room("");
        let r145 = new Room("");
        let r146 = new Room("");
        let r147 = new Room("");
        let r148 = new Room("");
        let r149 = new Room("");
        let r150 = new Room("");
        let r151 = new Room("");
        let r152 = new Room("");
        let r153 = new Room("");
        let r154 = new Room("");
        let r155 = new Room("");
        let r156 = new Room("");
        let r157 = new Room("");
        let r158 = new Room("");
        let r159 = new Room("");
        let r160 = new Room("");
        let r161 = new Room("");
        let r162 = new Room("");
        let r163 = new Room("");
        let r164 = new Room("");
        let r165 = new Room("");
        let r166 = new Room("");
        let r167 = new Room("");
        let r168 = new Room("");
        let r169 = new Room("");
        let r170 = new Room("");
        let r171 = new Room("");
        let r172 = new Room("");
        let r173 = new Room("");
        let r174 = new Room("");
        let r175 = new Room("");
        let r176 = new Room("");
        let r177 = new Room("");
        let r178 = new Room("");
        let r179 = new Room("");
        let r180 = new Room("");
        let r181 = new Room("");
        let r182 = new Room("");
        let r183 = new Room("");
        let r184 = new Room("");
        let r185 = new Room("");
        let r186 = new Room("");
        let r187 = new Room("");
        let r188 = new Room("");
        let r189 = new Room("");
        let r190 = new Room("");
        let r191 = new Room("");
        let r192 = new Room("");
        let r193 = new Room("");
        let r194 = new Room("");
        let r195 = new Room("");
        let r196 = new Room("");
        let r197 = new Room("");
        let r198 = new Room("");
        let r199 = new Room("");
        let r200 = new Room("");
        let r201 = new Room("");
        let r202 = new Room("");
        let r203 = new Room("");
        let r204 = new Room("");
        let r205 = new Room("");
        let r206 = new Room("");
        let r207 = new Room("");
        let r208 = new Room("");
        let r209 = new Room("");
        let r210 = new Room("");
        let r211 = new Room("");
        let r212 = new Room("");
        let r213 = new Room("");
        let r214 = new Room("");
        let r215 = new Room("");
        let r216 = new Room("");
        let r217 = new Room("");
        let r218 = new Room("");
        let r219 = new Room("");
        let r220 = new Room("");
        let r221 = new Room("");
        let r222 = new Room("");
        let r223 = new Room("");
        let r224 = new Room("");
        let r225 = new Room("");
        let r226 = new Room("");
        let r227 = new Room("");
        let r228 = new Room("");
        let r229 = new Room("");
        let r230 = new Room("");
        let r231 = new Room("");
        let r232 = new Room("");
        let r233 = new Room("");
        let r234 = new Room("");
        let r235 = new Room("");
        let r236 = new Room("");
        let r237 = new Room("");
        let r238 = new Room("");
        let r239 = new Room("");
        let r240 = new Room("");
        let r241 = new Room("");
        let r242 = new Room("");
        let r243 = new Room("");
        let r244 = new Room("");
        let r245 = new Room("");
        let r246 = new Room("");
        let r247 = new Room("");
        let r248 = new Room("");
        let r249 = new Room("");
        let r250 = new Room("");
        let r251 = new Room("");
        let r252 = new Room("");
        let r253 = new Room("");
        let r254 = new Room("");
        let r255 = new Room("");
        let r256 = new Room("");
        let r257 = new Room("");
        let r258 = new Room("");
        let r259 = new Room("");
        let r260 = new Room("");
        let r261 = new Room("");
        let r262 = new Room("");
        let r263 = new Room("");
        let r264 = new Room("");
        let r265 = new Room("");
        let r266 = new Room("");
        let r267 = new Room("");
        let r268 = new Room("");
        let r269 = new Room("");
        let r270 = new Room("");
        let r271 = new Room("");
        let r272 = new Room("");
        let r273 = new Room("");
        let r274 = new Room("");
        let r275 = new Room("");
        let r276 = new Room("");
        let r277 = new Room("");
        let r278 = new Room("");
        let r279 = new Room("");
        let r280 = new Room("");
        let r281 = new Room("");
        let r282 = new Room("");
        let r283 = new Room("");
        let r284 = new Room("");
        let r285 = new Room("");
        let r286 = new Room("");
        let r287 = new Room("");
        let r288 = new Room("");
        let r289 = new Room("");
        let r290 = new Room("");
        let r291 = new Room("");
        let r292 = new Room("");
        let r293 = new Room("");
        let r294 = new Room("");
        let r295 = new Room("");
        let r296 = new Room("");
        let r297 = new Room("");
        let r298 = new Room("");
        let r299 = new Room("");
        let r300 = new Room("");
        let r301 = new Room("");
        let r302 = new Room("");
        let r303 = new Room("");
        let r304 = new Room("");
        let r305 = new Room("");
        let r306 = new Room("");
        let r307 = new Room("");
        let r308 = new Room("");
        let r309 = new Room("");
        let r310 = new Room("");
        let r311 = new Room("");
        let r312 = new Room("");
        let r313 = new Room("");
        let r314 = new Room("");
        let r315 = new Room("");
        let r316 = new Room("");
        let r317 = new Room("");
        let r318 = new Room("");
        let r319 = new Room("");
        let r320 = new Room("");
        let r321 = new Room("");
        let r322 = new Room("");
        let r323 = new Room("");
        let r324 = new Room("");

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

        let startRooms = [r001, r018, r307, r324];
        let selectRoom = startRooms[Math.floor(Math.random() * startRooms.length)];
        this.currentRoom = selectRoom;

        let exitRooms = [r119, r150, r177, r225];
        let selectExit = exitRooms[Math.floor(Math.random() * exitRooms.length)];
        this.exitRoom = selectExit;

        this.teleportRooms = [r019, r035, r085, r145, r250, r317];
    }

    printWelcome() : void {
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
    }

    gameOver() : void {
        this.isOn = false;
        this.out.println("Thank you for playing. Goodbye.");
        this.out.println("Press F5 to restart the game.");
    }

    deathByTrap() : void {
        this.isOn = false;
        this.out.println("You ran into a trap and died.");
        this.out.println("Press F5 to try again.");
        this.parser.input.disabled = true;
        throw new Error();
    }

    deathByMonster() : void {
        this.isOn = false;
        this.out.println("You ran into a monster and died.");
        this.out.println("Press F5 to try again.");
        this.parser.input.disabled = true;
        throw new Error();
    }

    wheelOfFortune() : void {
        let toDieOrNotToDie = Math.random();

        if (toDieOrNotToDie < 0.02) {
            this.deathByTrap();
        }

        else if (toDieOrNotToDie < 0.04) {
            this.deathByMonster();
        }

        else {
            //
        }
    }

    victoryCheck() : void {
        if (this.exitRoom == this.currentRoom) {
            this.victory();
        }

        else {
            //
        }
    }

    victory() : void {
        this.isOn = false;
        this.out.println("You escaped the labyrinth!");
        this.out.println("Press F5 to play again.");
        this.out.println("Taken steps to the exit: " + this.score);
        this.parser.input.disabled = true;
        throw new Error();
    }

    teleportCheck() : void {
        this.teleportRooms.indexOf(this.currentRoom);
        if (this.teleportRooms.indexOf(this.currentRoom) === -1) {
            //
        }

        else {
            this.teleport();
        }
    }

    teleport() : void {
        let selectTeleport = this.teleportRooms[Math.floor(Math.random() * this.teleportRooms.length)];
        this.currentRoom = selectTeleport;
        this.out.println("You have been teleported!");
    }
}
