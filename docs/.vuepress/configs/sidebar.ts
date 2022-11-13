/**
 * @file configs/sidebar.ts
 * @brief Contains the SidebarConfig object.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import type {SidebarConfig} from '@vuepress/theme-default';

export const sideBarConfig: SidebarConfig = [
  {
    text: 'FreeBSD port 开发者手册翻译项目',
    children: ['/README.md'],
  },
  {
    text: '目录',
    children: ['/SUMMARY.md'],
  },
    {
    text: 'FreeBSD 开发者手册',
    children: ['/freebsd-kai-fa-zhe-shou-ce.md'],
  },
    {
    text: '译者说明',
    children: ['/yi-zhe-shuo-ming.md'],
  },
  {
    text: '第1章 简介',
    children: ['/di-1-zhang-jian-jie.md'],
  },
  {
    text: '第2章 制作新的 port',
    children: ['/di-2-zhang-zhi-zuo-xin-de-port.md'],
  },
  {
    text: '第3章 简单的 port',
    children: [
		'/di-3-zhang-jian-dan-de-port/3.1.-bian-xie-makefile.md',
		'/di-3-zhang-jian-dan-de-port/3.2.-bian-xie-miao-shu-wen-jian.md',
		'/di-3-zhang-jian-dan-de-port/3.3.-chuang-jian-xiao-yan-he-wen-jian.md',
		'/di-3-zhang-jian-dan-de-port/3.4.-ce-shi-port.md',
		'/di-3-zhang-jian-dan-de-port/3.5.-yong-portlint-lai-jian-cha-port.md',
		'/di-3-zhang-jian-dan-de-port/3.6.-ti-jiao-xin-de-port.md',
    ],
  },
  {
    text: '第4章 复杂的 Port',
    children: [
		'/di-4-zhang-fu-za-de-port/4.1.-ta-shi-zen-mo-yun-zuo-de.md',
		'/di-4-zhang-fu-za-de-port/4.2.-huo-qu-yuan-dai-ma.md',
		'/di-4-zhang-fu-za-de-port/4.3.-xiu-gai-port.md',
		'/di-4-zhang-fu-za-de-port/4.4.-da-bu-ding.md',
		'/di-4-zhang-fu-za-de-port/4.5.-pei-zhi.md',
		'/di-4-zhang-fu-za-de-port/4.6.-chu-li-yong-hu-shu-ru.md',
    ],
  },
  {
    text: '第5章 配置 Makefile',
    children: [
		'/di-5-zhang-pei-zhi-makefile/5.1.-zuo-zhe-fa-bu-de-dai-ma.md',
		'/di-5-zhang-pei-zhi-makefile/5.2.-ming-ming.md',
		'/di-5-zhang-pei-zhi-makefile/5.3.-gui-lei.md',
		'/di-5-zhang-pei-zhi-makefile/5.4.-yuan-dai-ma-bao-wen-jian.md',
		'/di-5-zhang-pei-zhi-makefile/5.5.-wei-hu-zhe-maintainer.md',
		'/di-5-zhang-pei-zhi-makefile/5.6.-yi-ju-hua-shuo-ming-comment.md',
		'/di-5-zhang-pei-zhi-makefile/5.7.-xu-ke-zheng.md',
		'/di-5-zhang-pei-zhi-makefile/5.8.portscout.md',
		'/di-5-zhang-pei-zhi-makefile/5.9.-yi-lai-guan-xi.md',
		'/di-5-zhang-pei-zhi-makefile/5.10.-cong-shu-port-he-masterdir.md',
		'/di-5-zhang-pei-zhi-makefile/5.11.man-shou-ce.md',
		'/di-5-zhang-pei-zhi-makefile/5.12.info-wen-jian.md',
		'/di-5-zhang-pei-zhi-makefile/5.13.-makefile-can-shu.md',
		'/di-5-zhang-pei-zhi-makefile/5.14.-zhi-ding-lin-shi-gong-zuo-mu-lu.md',
		'/di-5-zhang-pei-zhi-makefile/5.15.-chu-li-chong-tu.md',
		'/di-5-zhang-pei-zhi-makefile/5.16.-an-zhuang-wen-jian.md',
		'/di-5-zhang-pei-zhi-makefile/5.17.-shi-yong-binaryalias-lai-zhong-ming-ming-ming-ling-er-bu-shi-zai-bian-yi-zhong-da-bu-ding.md',
    ],
  },
  {
    text: '第6章 特殊情况',
    children: [
		'/di-6-zhang-te-shu-qing-kuang/6.1.staging.md',
		'/di-6-zhang-te-shu-qing-kuang/6.2.-kun-bang-ku.md',
		'/di-6-zhang-te-shu-qing-kuang/6.3.-gong-xiang-ku.md',
		'/di-6-zhang-te-shu-qing-kuang/6.4.-you-fen-fa-xian-zhi-huo-fa-lv-wen-ti-de-port.md',
		'/di-6-zhang-te-shu-qing-kuang/6.5.-bian-yi-ji-zhi.md',
		'/di-6-zhang-te-shu-qing-kuang/6.6.-shi-yong-gnu-zi-dong-hua-gong-ju.md',
		'/di-6-zhang-te-shu-qing-kuang/6.7.-shi-yong-gnu-gettext.md',
		'/di-6-zhang-te-shu-qing-kuang/6.8.-shi-yong-perl.md',
		'/di-6-zhang-te-shu-qing-kuang/6.9.-shi-yong-x11.md',
		'/di-6-zhang-te-shu-qing-kuang/6.10.-shi-yong-gnome.md',
		'/di-6-zhang-te-shu-qing-kuang/6.11.gnome-zu-jian.md',
		'/di-6-zhang-te-shu-qing-kuang/6.12.-shi-yong-qt.md',
		'/di-6-zhang-te-shu-qing-kuang/6.13.-shi-yong-kde.md',
		'/di-6-zhang-te-shu-qing-kuang/6.14.-shi-yong-lxqt.md',
		'/di-6-zhang-te-shu-qing-kuang/6.15.-shi-yong-java.md',
		'/di-6-zhang-te-shu-qing-kuang/6.16.web-cheng-xu-apache-he-php.md',
		'/di-6-zhang-te-shu-qing-kuang/6.17.-shi-yong-python.md',
		'/di-6-zhang-te-shu-qing-kuang/6.18.-shi-yong-tcltk.md',
		'/di-6-zhang-te-shu-qing-kuang/6.19.-shi-yong-ruby.md',
		'/di-6-zhang-te-shu-qing-kuang/6.20.-shi-yong-sdl.md',
		'/di-6-zhang-te-shu-qing-kuang/6.21.-shi-yong-wxwidgets.md',
		'/di-6-zhang-te-shu-qing-kuang/6.22.-shi-yong-lua.md',
		'/di-6-zhang-te-shu-qing-kuang/6.23.-shi-yong-iconv.md',
		'/di-6-zhang-te-shu-qing-kuang/6.24.-shi-yong-xfce.md',
		'/di-6-zhang-te-shu-qing-kuang/6.25.-shi-yong-shu-ju-ku.md',
		'/di-6-zhang-te-shu-qing-kuang/6.26.-qi-dong-he-ting-zhi-fu-wu-rc-jiao-ben.md',
		'/di-6-zhang-te-shu-qing-kuang/6.27.-tian-jia-yong-hu-he-yong-hu-zu.md',
		'/di-6-zhang-te-shu-qing-kuang/6.28.-yi-lai-nei-he-yuan-dai-ma-de-port.md',
		'/di-6-zhang-te-shu-qing-kuang/6.29.go-ku.md',
		'/di-6-zhang-te-shu-qing-kuang/6.30.haskell-ku.md',
		'/di-6-zhang-te-shu-qing-kuang/6.31.shell-zi-dong-wan-cheng-wen-jian.md',
    ],
  },
  {
    text: '第7章 Flavors',
    children: [
		'/di-7-zhang-flavors/7.1.-flavors-jian-jie.md',
		'/di-7-zhang-flavors/7.2.-shi-yong-flavors.md',
		'/di-7-zhang-flavors/7.3.usesphp-he-flavors.md',
		'/di-7-zhang-flavors/7.4.usespython-he-flavors.md',
		'/di-7-zhang-flavors/7.5.useslua-he-flavors.md',
    ],
  },
  {
    text: '第8章 高级 pkg-plist 实践',
    children: [
		'/di-8-zhang-gao-ji-pkgplist-shi-jian/8.1.-gen-ju-make-bian-liang-dui-pkgplist-jin-hang-xiu-gai.md',
		'/di-8-zhang-gao-ji-pkgplist-shi-jian/8.2.-kong-mu-lu.md',
		'/di-8-zhang-gao-ji-pkgplist-shi-jian/8.4.-dong-tai-yu-jing-tai-ruan-jian-bao-lie-biao.md',
		'/di-8-zhang-gao-ji-pkgplist-shi-jian/8.3.-pei-zhi-wen-jian.md',
		'/di-8-zhang-gao-ji-pkgplist-shi-jian/8.5.-zi-dong-chuang-jian-ruan-jian-bao-lie-biao.md',
		'/di-8-zhang-gao-ji-pkgplist-shi-jian/8.6.-yong-guan-jian-ci-kuo-zhan-ruan-jian-bao-lie-biao.md',
    ],
  },
  {
    text: '第9章 pkg-\*',
    children: [
		'/di-9-zhang-pkg/9.1.pkgmessage-an-zhuang-er-jin-zhi-bao-shi-xian-shi-de-xiao-xi-wen-jian.md',
		'/di-9-zhang-pkg/9.2.-pkginstall-an-zhuang-er-jin-zhi-bao-shi-zhi-hang-de-jiao-ben-wen-jian.md',
		'/di-9-zhang-pkg/8.3.pkgdeinstall-xie-zai-shi-zhi-hang-de-jiao-ben-wen-jian.md',
		'/di-9-zhang-pkg/9.4.-xiu-gai-pkg-wen-jian-de-ming-zi.md',
		'/di-9-zhang-pkg/9.5.-shi-yong-subfiles-he-sublist.md',
    ],
  },
  {
    text: '第10章 测试 port',
    children: [
		'/di-10-zhang-ce-shi-port/10.1.-yun-hang-make-describe.md',
		'/di-10-zhang-ce-shi-port/10.2.portclippy-portfmt.md',
		'/di-10-zhang-ce-shi-port/10.3.portlint.md',
		'/di-10-zhang-ce-shi-port/10.4.porttools.md',
		'/di-10-zhang-ce-shi-port/10.5.prefix-he-destdir.md',
		'/di-10-zhang-ce-shi-port/10.6.poudriere.md',
    ],
  },
  {
    text: '第11章 升级 port',
    children: [
		'/di-11-zhang-sheng-ji-port/11.1.-shi-yong-git-zhi-zuo-bu-ding.md',
		'/di-11-zhang-sheng-ji-port/11.2.updating-he-moved.md',
    ],
  },
  {
    text: '第12章 安全',
    children: [
		'/di-12-zhang-an-quan/12.1.-wei-he-an-quan-ru-ci-zhong-yao.md',
		'/di-12-zhang-an-quan/12.2.-xiu-fu-an-quan-lou-dong.md',
		'/di-12-zhang-an-quan/12.3.-rang-she-qu-le-jie-qing-kuang.md',
    ],
  },
  {
    text: '第13章 该做什么和不该做什么',
    children: [
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.1.-jian-jie.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.2.wrkdir-lian-bian-shi-shi-yong-de-lin-shi-mu-lu.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.3.wrkdirprefix-yong-yu-lian-bian-de-lin-shi-mu-lu-de-fu-mu-lu-ming.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.4.-qu-fen-bu-tong-de-cao-zuo-xi-tong-yi-ji-qi-ban-ben.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.5.-zai-bsd.port.mk-zhi-hou-xie-yi-xie-nei-rong.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.6.-zai-wrapper-jiao-ben-zhong-shi-yong-exec-yu-ju.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.7.-li-xing-hang-shi.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.8.-zun-xun-cc-he-cxx-she-zhi.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.9.-zun-xun-cflags.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.10.-rong-chang-de-bian-yi-ri-zhi.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.11.-fan-kui.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.12.readme.html.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.13.-shi-yong-broken-forbidden-huo-ignore-zu-zhi-yong-hu-an-zhuang-port.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.14.-shi-yong-jia-gou-kao-liang.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.15.-shi-yong-deprecated-huo-expirationdate-biao-shi-mou-ge-port-jiang-bei-shan-chu.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.16.-bi-mian-shi-yong-.error-jie-gou.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.17.sysctl-de-yong-fa.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.18.-zhong-xin-fa-bu-de-distfiles.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.19.-shi-yong-posix-biao-zhun.md',
		'/di-13-zhang-gai-zuo-shi-mo-he-bu-gai-zuo-shi-mo/13.20.-za-xiang.md',
    ],
  },
  {
    text: '第14章 makefile 示例',
    children: ['/di-14-zhang-makefile-shi-li.md'],
  },
  {
    text: '第15章 在 Port Makefile 中变量的顺序',
    children: [
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.1.portname-bu-fen.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.2.patchfiles-bu-fen.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.3.maintainer-bu-fen.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.4.-license-xu-ke-zheng-bu-fen.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.5.-yi-ban-de-brokenignoredeprecated-xiao-xi.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.6.-yi-lai-bu-fen.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.7.flavors.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.8.uses-he-usex.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.9.-biao-zhun-de-bsd.port.mk-bian-liang.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.10.options-he-bang-zhu-wen-dang.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.11.-qi-yu-bian-liang.md',
		'/di-15-zhang-zai-port-makefile-zhong-bian-liang-de-shun-xu/15.12.target.md',
    ],
  },
  {
    text: '第16章 保持同步',
    children: [
		'/di-16-zhang-bao-chi-tong-bu/16.1.freshports.md',
		'/di-16-zhang-bao-chi-tong-bu/16.2.-dai-ma-ku-de-web-fang-wen-jie-mian.md',
		'/di-16-zhang-bao-chi-tong-bu/16.3.freebsd-ports-you-jian-lie-biao.md',
		'/di-16-zhang-bao-chi-tong-bu/16.4.-freebsd-port-gou-jian-ji-qun.md',
		'/di-16-zhang-bao-chi-tong-bu/16.5.portscoutfreebsd-ports-distfile-sao-miao-qi.md',
    ],
  },
  {
    text: '第17章 使用 USES 宏',
    children: [
		'/di-17-zhang-shi-yong-uses-hong/17.1.uses-jian-jie.md',
		'/di-17-zhang-shi-yong-uses-hong/17.2.7z.md',
		'/di-17-zhang-shi-yong-uses-hong/17.3.ada.md',
		'/di-17-zhang-shi-yong-uses-hong/17.4.autoreconf.md',
		'/di-17-zhang-shi-yong-uses-hong/17.5.blaslapack.md',
		'/di-17-zhang-shi-yong-uses-hong/17.6.bdb.md',
		'/di-17-zhang-shi-yong-uses-hong/17.7.bison.md',
		'/di-17-zhang-shi-yong-uses-hong/17.8.cabal.md',
		'/di-17-zhang-shi-yong-uses-hong/17.9.cargo.md',
		'/di-17-zhang-shi-yong-uses-hong/17.10.charsetfix.md',
		'/di-17-zhang-shi-yong-uses-hong/17.11.cmake.md',
		'/di-17-zhang-shi-yong-uses-hong/17.12.compiler.md',
		'/di-17-zhang-shi-yong-uses-hong/17.13.cpe.md',
		'/di-17-zhang-shi-yong-uses-hong/17.14.cran.md',
		'/di-17-zhang-shi-yong-uses-hong/17.15.desktop-file-utils.md',
		'/di-17-zhang-shi-yong-uses-hong/17.16.desthack.md',
		'/di-17-zhang-shi-yong-uses-hong/17.17.display.md',
		'/di-17-zhang-shi-yong-uses-hong/17.18.dos2unix.md',
		'/di-17-zhang-shi-yong-uses-hong/17.19.drupal.md',
		'/di-17-zhang-shi-yong-uses-hong/17.20.eigen.md',
		'/di-17-zhang-shi-yong-uses-hong/17.21.-elfctl.md',
		'/di-17-zhang-shi-yong-uses-hong/17.22.-fakeroot.md',
		'/di-17-zhang-shi-yong-uses-hong/17.23.-fam.md',
		'/di-17-zhang-shi-yong-uses-hong/17.23.-firebird.md',
		'/di-17-zhang-shi-yong-uses-hong/17.24.-firebird.md',
		'/di-17-zhang-shi-yong-uses-hong/17.25.-fonts.md',
		'/di-17-zhang-shi-yong-uses-hong/17.26.-fortran.md',
		'/di-17-zhang-shi-yong-uses-hong/17.27.-fuse.md',
		'/di-17-zhang-shi-yong-uses-hong/17.28.-gem.md',
		'/di-17-zhang-shi-yong-uses-hong/17.29.-gettext.md',
		'/di-17-zhang-shi-yong-uses-hong/17.30.-gettext-runtime.md',
		'/di-17-zhang-shi-yong-uses-hong/17.31.-gettext-tools.md',
		'/di-17-zhang-shi-yong-uses-hong/17.32.-ghostscript.md',
		'/di-17-zhang-shi-yong-uses-hong/17.33.-gl.md',
		'/di-17-zhang-shi-yong-uses-hong/17.34.-gmake.md',
		'/di-17-zhang-shi-yong-uses-hong/17.35.-gnome.md',
		'/di-17-zhang-shi-yong-uses-hong/17.36.-go.md',
		'/di-17-zhang-shi-yong-uses-hong/17.37.-gperf.md',
		'/di-17-zhang-shi-yong-uses-hong/17.38.-grantlee.md',
		'/di-17-zhang-shi-yong-uses-hong/17.39.-groff.md',
		'/di-17-zhang-shi-yong-uses-hong/17.40.-gssapi.md',
		'/di-17-zhang-shi-yong-uses-hong/17.41.-gstreamer.md',
		'/di-17-zhang-shi-yong-uses-hong/17.42.-horde.md',
		'/di-17-zhang-shi-yong-uses-hong/17.43.-iconv.md',
		'/di-17-zhang-shi-yong-uses-hong/17.44.-imake.md',
		'/di-17-zhang-shi-yong-uses-hong/17.45.-kde.md',
		'/di-17-zhang-shi-yong-uses-hong/17.46.-kmod.md',
		'/di-17-zhang-shi-yong-uses-hong/17.47.-lha.md',
		'/di-17-zhang-shi-yong-uses-hong/17.48.-libarchive.md',
		'/di-17-zhang-shi-yong-uses-hong/17.49.-libedit.md',
		'/di-17-zhang-shi-yong-uses-hong/17.50.-libtool.md',
		'/di-17-zhang-shi-yong-uses-hong/17.51.-linux.md',
		'/di-17-zhang-shi-yong-uses-hong/17.52.-localbase.md',
		'/di-17-zhang-shi-yong-uses-hong/17.53.-lua.md',
		'/di-17-zhang-shi-yong-uses-hong/17.54.-luajit.md',
		'/di-17-zhang-shi-yong-uses-hong/17.55.-lxqt.md',
		'/di-17-zhang-shi-yong-uses-hong/17.56.-magick.md',
		'/di-17-zhang-shi-yong-uses-hong/17.57.-makeinfo.md',
		'/di-17-zhang-shi-yong-uses-hong/17.58.-makeself.md',
		'/di-17-zhang-shi-yong-uses-hong/17.59.-mate.md',
		'/di-17-zhang-shi-yong-uses-hong/17.60.-meson.md',
		'/di-17-zhang-shi-yong-uses-hong/17.61.-metaport.md',
		'/di-17-zhang-shi-yong-uses-hong/17.62.-minizip.md',
		'/di-17-zhang-shi-yong-uses-hong/17.63.-mysql.md',
		'/di-17-zhang-shi-yong-uses-hong/17.64.-mono.md',
		'/di-17-zhang-shi-yong-uses-hong/17.65.-motif.md',
		'/di-17-zhang-shi-yong-uses-hong/17.66.-ncurses.md',
		'/di-17-zhang-shi-yong-uses-hong/17.67.-ninja.md',
		'/di-17-zhang-shi-yong-uses-hong/17.68.-nodejs.md',
		'/di-17-zhang-shi-yong-uses-hong/17.69.-objc.md',
		'/di-17-zhang-shi-yong-uses-hong/17.70.-openal.md',
		'/di-17-zhang-shi-yong-uses-hong/17.71.-pathfix.md',
		'/di-17-zhang-shi-yong-uses-hong/17.72.-pear.md',
		'/di-17-zhang-shi-yong-uses-hong/17.73.-perl5.md',
		'/di-17-zhang-shi-yong-uses-hong/17.74.-pgsql.md',
		'/di-17-zhang-shi-yong-uses-hong/17.75.-php.md',
		'/di-17-zhang-shi-yong-uses-hong/17.76.-pkgconfig.md',
		'/di-17-zhang-shi-yong-uses-hong/17.77.-pure.md',
		'/di-17-zhang-shi-yong-uses-hong/17.78.-pyqt.md',
		'/di-17-zhang-shi-yong-uses-hong/17.79.-pytest.md',
		'/di-17-zhang-shi-yong-uses-hong/17.80.-python.md',
		'/di-17-zhang-shi-yong-uses-hong/17.81.-qmail.md',
		'/di-17-zhang-shi-yong-uses-hong/17.82.-qmake.md',
		'/di-17-zhang-shi-yong-uses-hong/17.83.-qt.md',
		'/di-17-zhang-shi-yong-uses-hong/17.84.-qt-dist.md',
		'/di-17-zhang-shi-yong-uses-hong/17.85.-readline.md',
		'/di-17-zhang-shi-yong-uses-hong/17.86.-samba.md',
		'/di-17-zhang-shi-yong-uses-hong/17.87.-scons.md',
		'/di-17-zhang-shi-yong-uses-hong/17.88.-shared-mime-info.md',
		'/di-17-zhang-shi-yong-uses-hong/17.89.-shebangfix.md',
		'/di-17-zhang-shi-yong-uses-hong/17.90.-sqlite.md',
		'/di-17-zhang-shi-yong-uses-hong/17.91.-ssl.md',
		'/di-17-zhang-shi-yong-uses-hong/17.92.-tar.md',
		'/di-17-zhang-shi-yong-uses-hong/17.93.-tcl.md',
		'/di-17-zhang-shi-yong-uses-hong/17.94.-terminfo.md',
		'/di-17-zhang-shi-yong-uses-hong/17.95.-tk.md',
		'/di-17-zhang-shi-yong-uses-hong/17.96.-uidfix.md',
		'/di-17-zhang-shi-yong-uses-hong/17.97.-uniquefiles.md',
		'/di-17-zhang-shi-yong-uses-hong/17.98.-vala.md',
		'/di-17-zhang-shi-yong-uses-hong/17.99.-varnish.md',
		'/di-17-zhang-shi-yong-uses-hong/17.100.-webplugin.md',
		'/di-17-zhang-shi-yong-uses-hong/17.101.-xfce.md',
		'/di-17-zhang-shi-yong-uses-hong/17.102.-xorg.md',
		'/di-17-zhang-shi-yong-uses-hong/17.103.-xorg-cat.md',
		'/di-17-zhang-shi-yong-uses-hong/17.104.-zip.md',
    ],
  },
  {
    text: '第18章 __FreeBSD_version 的值',
    children: [
		'/di-18-zhang-freebsdversion-de-zhi/18.1.-freebsd-14.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.2.-freebsd-13.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.3.-freebsd-12.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.4.-freebsd-11.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.5.-freebsd-10.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.6.-freebsd-9.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.7.-freebsd-8.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.8.-freebsd-7.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.9.-freebsd-6.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.10.-freebsd-5.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.11.-freebsd-4.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.12.-freebsd-3.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.13.-freebsd-2.2.md',
		'/di-18-zhang-freebsdversion-de-zhi/18.14.freebsd-2.2release-zhi-qian-de-freebsd-2.md',
    ],
  },
];
