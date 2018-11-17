
<?php
function whois_query($domain) {
    // 检测域名
    $domain = $_POST['domain'];
    $domain = strtolower(trim($domain));
    $domain = preg_replace('/^http:\/\//i', '', $domain);
    $domain = preg_replace('/^www\./i', '', $domain);
    $domain = explode('/', $domain);
    $domain = trim($domain[0]);
    $dp = explode(".", $domain);
	if (sizeof($dp) > 1)
    	$dp = $dp[1];
	else
		$dp = "";

    // 错误提示

    $arrErrors = array();
      if ( (!preg_match('/^[a-zA-Z0-9-]+\.([a-zA-Z]{2,4})$/', $domain)) && (!preg_match('/^[a-zA-Z0-9-]+\.([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4})$/', $domain)) ) $arrErrors['domi'] = 'Error';
    //if (!isset($domain)) $arrErrors['empt'] = '请输入正确的域名格式.';
    if (!isset($domain)) $arrErrors['empt'] = 'Error';

       $available = array("ac", "net.ae", "gov.ae", "org.ae", "mil.ae", "sch.ae", "ac.ae", "pro.ae", "name.ae", "ae", "com.ag", "edu.ag", "gov.ag", "net.ag", "org.ag", "ag", "am", "as", "asia", "ac.at", "co.at", "gv.at", "or.at", "at", "asn.au", "com.au", "edu.au", "id.au", "net.au", "org.au", "bg", "bj", "agr.br", "am.br", "art.br", "com.br", "coop.br", "esp.br", "etc.br", "far.br", "fm.br", "g12.br", "gov.br", "imb.br", "ind.br", "inf.br", "mil.br", "net.br", "org.br", "psi.br", "rec.br", "srv.br", "tmp.br", "tur.br", "tv.br", "edu.br", "nom.br", "adm.br", "adv.br", "arq.br", "ato.br", "bio.br", "bmd.br", "cim.br", "cng.br", "cnt.br", "ecn.br", "eng.br", "eti.br", "fnd.br", "fot.br", "fst.br", "ggf.br", "jor.br", "lel.br", "mat.br", "med.br", "mus.br", "not.br", "ntr.br", "odo.br", "ppg.br", "pro.br", "psc.br", "qsl.br", "trd.br", "vet.br", "zlg.br", "br", "com.bz", "net.bz", "org.bz", "bz", "bc.ca", "mb.ca", "nb.ca", "nf.ca", "ns.ca", "nt.ca", "on.ca", "pe.ca", "qc.ca", "sk.ca", "yk.ca", "ca", "cd", "cl", "co.ck", "edu.ck", "gov.ck", "net.ck", "org.ck", "cm", "edu.cn", "ac.cn", "ah.cn", "bj.cn", "com.cn", "cq.cn", "gd.cn", "gov.cn", "gs.cn", "gx.cn", "gz.cn", "hb.cn", "he.cn", "hi.cn", "hk.cn", "hl.cn", "hn.cn", "jl.cn", "js.cn", "mo.cn", "net.cn", "nm.cn", "nx.cn", "ln.cn", "org.cn", "qh.cn", "sc.cn", "sh.cn", "sn.cn", "tj.cn", "tw.cn", "yn.cn", "xj.cn", "xz.cn", "zj.cn", "cn", "cx", "cz", "dk", "dm", "com.ee", "pri.ee", "fie.ee", "org.ee", "med.ee", "ee", "fi", "ac.fj", "biz.fj", "com.fj", "gov.fj", "info.fj", "mil.fj", "name.fj", "net.fj", "org.fj", "pro.fj", "school.fj", "fo", "asso.fr", "com.fr", "nom.fr", "prd.fr", "presse.fr", "tm.fr", "fr", "gd", "co.gg", "gov.gg", "net.gg", "org.gg", "sch.gg", "gg", "gl", "gm", "gs", "com.hk", "edu.hk", "gov.hk", "net.hk", "org.hk", "hk", "hm", "hn", "co.hu", "info.hu", "org.hu", "priv.hu", "sport.hu", "tm.hu", "hu", "war.net.id", "web.id", "sch.id", "go.id", "ac.id", "co.id", "or.id", "net.id", "mil.id", "ie", "ac.il", "co.il", "gov.il", "idf.il", "k12.il", "muni.il", "net.il", "org.il", "co.in", "net.in", "org.in", "gen.in", "firm.in", "ind.in", "in", "io", "ac.ir", "co.ir", "gov.ir", "id.ir", "net.ir", "org.ir", "sch.ir", "ir", "is", "it", "je", "jobs", "ac.jp", "ad.jp", "co.jp", "ed.jp", "go.jp", "ne.jp", "or.jp", "geo.jp", "jp", "ac.ke", "co.ke", "go.ke", "ne.ke", "or.ke", "sc.ke", "ac.kr", "co.kr", "go.kr", "ne.kr", "or.kr", "pe.kr", "re.kr", "seoul.kr", "kyonggi.kr", "kz", "la", "lt", "ly", "asn.lv", "com.lv", "conf.lv", "edu.lv", "gov.lv", "id.lv", "mil.lv", "net.lv", "org.lv", "lv", "co.ma", "net.ma", "org.ma", "ac.ma", "ma", "tm.mc", "asso.mc", "mc", "me", "mn", "mobi", "ms", "com.mt", "edu.mt", "net.mt", "org.mt", "tm.mt", "uu.mt", "mt", "mu", "com.mx", "edu.mx", "gob.mx", "net.mx", "org.mx", "mx", "com.my", "net.my", "org.my", "gov.my", "edu.my", "mil.my", "my", "com.na", "org.na", "alt.na", "co.na", "edu.na", "net.na", "nf", "no", "nu", "biz.pl", "com.pl", "net.pl", "org.pl", "info.pl", "pl", "cpa.pro", "eng.pro", "law.pro", "med.pro", "pro", "pt", "com.pt", "nome.pt", "pt", "ac.nz", "co.nz", "cri.nz", "gen.nz", "govt.nz", "iwi.nz", "net.nz", "org.nz", "mil.nz", "pm", "school.nz", "re", "arts.ro", "com.ro", "firm.ro", "info.ro", "nom.ro", "nt.ro", "org.ro", "rec.ro", "store.ro", "tm.ro", "www.ro", "ro", "com.ru", "net.ru", "org.ru", "ru", "sb", "sc", "pp.se", "press.se", "org.se", "se", "com.sg", "edu.sg", "gov.sg", "net.sg", "org.sg", "per.sg", "sg", "com.sh", "co.sh", "net.sh", "org.sh", "edu.sh", "gov.sh", "mil.sh", "sh", "si", "sk", "sm", "st", "su", "tc", "tel", "tf", "ac.th", "co.th", "go.th", "in.th", "mi.th", "net.th", "or.th", "tj", "tk", "tl", "tm", "to", "tp", "bbs.tr", "com.tr", "edu.tr", "gen.tr", "gov.tr", "k12.tr", "mil.tr", "net.tr", "nom.tr", "org.tr", "web.tr", "travel", "tv", "com.tw", "ebiz.tw", "club.tw", "game.tw", "idv.tw", "net.tw", "org.tw", "tw", "com.ua", "edu.ua", "gov.ua", "org.ua", "net.ua", "ua", "ug", "co.ug", "or.ug", "ac.ug", "sc.ug", "go.ug", "ne.ug", "org.ug", "mil.ug", "co.uk", "ltd.uk", "me.uk", "net.uk", "org.uk", "plc.uk", "sch.uk", "ac.uk", "gov.uk", "uk.co", "us", "com.uy", "org.uy", "net.uy", "edu.uy", "gub.uy", "mil.uy", "uz", "va", "vc", "co.ve", "com.ve", "net.ve", "web.ve", "nom.ve", "firm.ve", "store.ve", "rec.ve", "info.ve", "org.ve", "ve", "vg", "wales.com", "wales.org", "wales.net", "cymru.org", "com.ws", "edu.ws", "gov.ws", "net.ws", "org.ws", "ws", "au.com", "br.com", "cn.com", "de.com", "eu.com", "eu.org", "gb.com", "gb.net", "hu.com", "no.com", "qc.com", "ru.com", "sa.com", "se.com", "se.net", "uk.com", "uk.net", "us.com", "uy.com", "uz", "za.com", "za.net", "za.org", "aero", "com", "net", "org", "info", "museum", "name", "biz", "cc", "edu", "mil", "int", "coop", "gov");

    //if (!in_array("$dp", $available)) $arrErrors['unav'] = '查询的域名扩展不在范围之内.';
    if (!in_array("$dp", $available)) $arrErrors['unav'] = '';
    if (count($arrErrors) != 0) {
    $strError = '<img src="images/error.gif" width="16" height="16" hspace="5" alt="">Error:<ul>';
    foreach ($arrErrors as $error) {
    $strError .= "<li>$error</li>";
    }
    $strError .= '</ul>';
    echo "<div id=\"container\"><div id=\"content\">";
    // echo "$strError<br/><br/><br/><a href=\"javascript:history.back()\">返回首页</a>";
    echo "</div></div>";
    exit;
    }

    $_domain = explode('.', $domain);
    $lst = count($_domain)-1;
    $ext = $_domain[$lst];
    $servers = array(
        "ac" => "whois.nic.ac",
        "net.ae" => "whois.aeda.net.ae",
        "gov.ae" => "whois.aeda.net.ae",
        "org.ae" => "whois.aeda.net.ae",
        "mil.ae" => "whois.aeda.net.ae",
        "sch.ae" => "whois.aeda.net.ae",
        "ac.ae" => "whois.aeda.net.ae",
        "pro.ae" => "whois.aeda.net.ae",
        "name.ae" => "whois.aeda.net.ae",
        "ae" => "whois.aeda.net.ae",
        "com.ag" => "whois.nic.ag",
        "edu.ag" => "whois.nic.ag",
        "gov.ag" => "whois.nic.ag",
        "net.ag" => "whois.nic.ag",
        "org.ag" => "whois.nic.ag",
        "ag" => "whois.nic.ag",
        "am" => "whois.nic.am",
        "as" => "whois.nic.as",
        "asia" => "whois.nic.asia",
        "ac.at" => "whois.nic.at",
        "co.at" => "whois.nic.at",
        "gv.at" => "whois.nic.at",
        "or.at" => "whois.nic.at",
        "at" => "whois.nic.at",
        "asn.au" => "whois.aunic.net",
        "com.au" => "whois.aunic.net",
        "edu.au" => "whois.aunic.net",
        "id.au" => "whois.aunic.net",
        "net.au" => "whois.aunic.net",
        "org.au" => "whois.aunic.net",
        "bg" => "whois.digsys.bg",
        "bj" => "whois.nic.bj",
        "agr.br" => "whois.nic.br",
        "am.br" => "whois.nic.br",
        "art.br" => "whois.nic.br",
        "com.br" => "whois.nic.br",
        "coop.br" => "whois.nic.br",
        "esp.br" => "whois.nic.br",
        "etc.br" => "whois.nic.br",
        "far.br" => "whois.nic.br",
        "fm.br" => "whois.nic.br",
        "g12.br" => "whois.nic.br",
        "gov.br" => "whois.nic.br",
        "imb.br" => "whois.nic.br",
        "ind.br" => "whois.nic.br",
        "inf.br" => "whois.nic.br",
        "mil.br" => "whois.nic.br",
        "net.br" => "whois.nic.br",
        "org.br" => "whois.nic.br",
        "psi.br" => "whois.nic.br",
        "rec.br" => "whois.nic.br",
        "srv.br" => "whois.nic.br",
        "tmp.br" => "whois.nic.br",
        "tur.br" => "whois.nic.br",
        "tv.br" => "whois.nic.br",
        "edu.br" => "whois.nic.br",
        "nom.br" => "whois.nic.br",
        "adm.br" => "whois.nic.br",
        "adv.br" => "whois.nic.br",
        "arq.br" => "whois.nic.br",
        "ato.br" => "whois.nic.br",
        "bio.br" => "whois.nic.br",
        "bmd.br" => "whois.nic.br",
        "cim.br" => "whois.nic.br",
        "cng.br" => "whois.nic.br",
        "cnt.br" => "whois.nic.br",
        "ecn.br" => "whois.nic.br",
        "eng.br" => "whois.nic.br",
        "eti.br" => "whois.nic.br",
        "fnd.br" => "whois.nic.br",
        "fot.br" => "whois.nic.br",
        "fst.br" => "whois.nic.br",
        "ggf.br" => "whois.nic.br",
        "jor.br" => "whois.nic.br",
        "lel.br" => "whois.nic.br",
        "mat.br" => "whois.nic.br",
        "med.br" => "whois.nic.br",
        "mus.br" => "whois.nic.br",
        "not.br" => "whois.nic.br",
        "ntr.br" => "whois.nic.br",
        "odo.br" => "whois.nic.br",
        "ppg.br" => "whois.nic.br",
        "pro.br" => "whois.nic.br",
        "psc.br" => "whois.nic.br",
        "qsl.br" => "whois.nic.br",
        "trd.br" => "whois.nic.br",
        "vet.br" => "whois.nic.br",
        "zlg.br" => "whois.nic.br",
        "br" => "whois.nic.br",
        "com.bz" => "whois.belizenic.bz",
        "net.bz" => "whois.belizenic.bz",
        "org.bz" => "whois.belizenic.bz",
        "bz" => "whois.belizenic.bz",
        "bc.ca" => "whois.cira.ca",
        "mb.ca" => "whois.cira.ca",
        "nb.ca" => "whois.cira.ca",
        "nf.ca" => "whois.cira.ca",
        "ns.ca" => "whois.cira.ca",
        "nt.ca" => "whois.cira.ca",
        "on.ca" => "whois.cira.ca",
        "pe.ca" => "whois.cira.ca",
        "qc.ca" => "whois.cira.ca",
        "sk.ca" => "whois.cira.ca",
        "yk.ca" => "whois.cira.ca",
        "ca" => "whois.cira.ca",
        "cd" => "whois.nic.cd",
        "cl" => "whois.nic.cl",
        "co.ck" => "whois.nic.ck",
        "edu.ck" => "whois.nic.ck",
        "gov.ck" => "whois.nic.ck",
        "net.ck" => "whois.nic.ck",
        "org.ck" => "whois.nic.ck",
        "cm" => "whois.ripe",
        "edu.cn" => "whois.cnnic.net.cn",
        "ac.cn" => "whois.cnnic.net.cn",
        "ah.cn" => "whois.cnnic.net.cn",
        "bj.cn" => "whois.cnnic.net.cn",
        "com.cn" => "whois.cnnic.net.cn",
        "cq.cn" => "whois.cnnic.net.cn",
        "gd.cn" => "whois.cnnic.net.cn",
        "gov.cn" => "whois.cnnic.net.cn",
        "gs.cn" => "whois.cnnic.net.cn",
        "gx.cn" => "whois.cnnic.net.cn",
        "gz.cn" => "whois.cnnic.net.cn",
        "hb.cn" => "whois.cnnic.net.cn",
        "he.cn" => "whois.cnnic.net.cn",
        "hi.cn" => "whois.cnnic.net.cn",
        "hk.cn" => "whois.cnnic.net.cn",
        "hl.cn" => "whois.cnnic.net.cn",
        "hn.cn" => "whois.cnnic.net.cn",
        "jl.cn" => "whois.cnnic.net.cn",
        "js.cn" => "whois.cnnic.net.cn",
        "mo.cn" => "whois.cnnic.net.cn",
        "net.cn" => "whois.cnnic.net.cn",
        "nm.cn" => "whois.cnnic.net.cn",
        "nx.cn" => "whois.cnnic.net.cn",
        "ln.cn" => "whois.cnnic.net.cn",
        "org.cn" => "whois.cnnic.net.cn",
        "qh.cn" => "whois.cnnic.net.cn",
        "sc.cn" => "whois.cnnic.net.cn",
        "sh.cn" => "whois.cnnic.net.cn",
        "sn.cn" => "whois.cnnic.net.cn",
        "tj.cn" => "whois.cnnic.net.cn",
        "tw.cn" => "whois.cnnic.net.cn",
        "yn.cn" => "whois.cnnic.net.cn",
        "xj.cn" => "whois.cnnic.net.cn",
        "xz.cn" => "whois.cnnic.net.cn",
        "zj.cn" => "whois.cnnic.net.cn",
        "cn" => "whois.cnnic.net.cn",
        "cx" => "whois.nic.cx",
        "cz" => "whois.nic.cz",
        "dk" => "whois.dk-hostmaster.dk",
        "dm" => "whois.nic.dm",
        "com.ee" => "whois.eenet.ee",
        "pri.ee" => "whois.eenet.ee",
        "fie.ee" => "whois.eenet.ee",
        "org.ee" => "whois.eenet.ee",
        "med.ee" => "whois.eenet.ee",
        "ee" => "whois.eenet.ee",
        "fi" => "whois.ficora.fi",
        "ac.fj" => "whois.usp.ac.fj",
        "biz.fj" => "whois.usp.ac.fj",
        "com.fj" => "whois.usp.ac.fj",
        "gov.fj" => "whois.usp.ac.fj",
        "info.fj" => "whois.usp.ac.fj",
        "mil.fj" => "whois.usp.ac.fj",
        "name.fj" => "whois.usp.ac.fj",
        "net.fj" => "whois.usp.ac.fj",
        "org.fj" => "whois.usp.ac.fj",
        "pro.fj" => "whois.usp.ac.fj",
        "school.fj" => "whois.usp.ac.fj",
        "fo" => "whois.ripe.net",
        "asso.fr" => "whois.nic.fr",
        "com.fr" => "whois.nic.fr",
        "nom.fr" => "whois.nic.fr",
        "prd.fr" => "whois.nic.fr",
        "presse.fr" => "whois.nic.fr",
        "tm.fr" => "whois.nic.fr",
        "fr" => "whois.nic.fr",
        "gd" => "whois.adamsnames.tc",
        "co.gg" => "whois.channelisles.net",
        "gov.gg" => "whois.channelisles.net",
        "net.gg" => "whois.channelisles.net",
        "org.gg" => "whois.channelisles.net",
        "sch.gg" => "whois.channelisles.net",
        "gg" => "whois.channelisles.net",
        "gl" => "whois.ripe.net",
        "gm" => "whois.ripe.net",
        "gs" => "whois.adamsnames.tc",
        "com.hk" => "whois.hkdnr.net.hk",
        "edu.hk" => "whois.hkdnr.net.hk",
        "gov.hk" => "whois.hkdnr.net.hk",
        "net.hk" => "whois.hkdnr.net.hk",
        "org.hk" => "whois.hkdnr.net.hk",
        "hk" => "whois.hkdnr.net.hk",
        "hm" => "whois.registry.hm",
        "hn" => "whois2.afilias-grs.net",
        "co.hu" => "whois.nic.hu",
        "info.hu" => "whois.nic.hu",
        "org.hu" => "whois.nic.hu",
        "priv.hu" => "whois.nic.hu",
        "sport.hu" => "whois.nic.hu",
        "tm.hu" => "whois.nic.hu",
        "hu" => "whois.nic.hu",
        "war.net.id" => "whois.netzone.web.id",
        "web.id" => "whois.netzone.web.id",
        "sch.id" => "whois.netzone.web.id",
        "go.id" => "whois.netzone.web.id",
        "ac.id" => "whois.netzone.web.id",
        "co.id" => "whois.netzone.web.id",
        "or.id" => "whois.netzone.web.id",
        "net.id" => "whois.netzone.web.id",
        "mil.id" => "whois.netzone.web.id",
        "ie" => "whois.domainregistry.ie",
        "ac.il" => "whois.isoc.org.il",
        "co.il" => "whois.isoc.org.il",
        "gov.il" => "whois.isoc.org.il",
        "idf.il" => "whois.isoc.org.il",
        "k12.il" => "whois.isoc.org.il",
        "muni.il" => "whois.isoc.org.il",
        "net.il" => "whois.isoc.org.il",
        "org.il" => "whois.isoc.org.il",
        "co.in" => "whois.inregistry.net",
        "net.in" => "whois.inregistry.net",
        "org.in" => "whois.inregistry.net",
        "gen.in" => "whois.inregistry.net",
        "firm.in" => "whois.inregistry.net",
        "ind.in" => "whois.inregistry.net",
        "in" => "whois.inregistry.net",
        "io" => "whois.nic.io",
        "ac.ir" => "whois.nic.ir",
        "co.ir" => "whois.nic.ir",
        "gov.ir" => "whois.nic.ir",
        "id.ir" => "whois.nic.ir",
        "net.ir" => "whois.nic.ir",
        "org.ir" => "whois.nic.ir",
        "sch.ir" => "whois.nic.ir",
        "ir" => "whois.nic.ir",
        "is" => "whois.isnet.is",
        "it" => "whois.nic.it",
        "je" => "whois.channelisles.net",
        "jobs" => "jobswhois.verisign-grs.com",
        "ac.jp" => "whois.jprs.jp",
        "ad.jp" => "whois.jprs.jp",
        "co.jp" => "whois.jprs.jp",
        "ed.jp" => "whois.jprs.jp",
        "go.jp" => "whois.jprs.jp",
        "ne.jp" => "whois.jprs.jp",
        "or.jp" => "whois.jprs.jp",
        "geo.jp" => "whois.jprs.jp",
        "jp" => "whois.jprs.jp",
        "ac.ke" => "whois.kenic.or.ke",
        "co.ke" => "whois.kenic.or.ke",
        "go.ke" => "whois.kenic.or.ke",
        "ne.ke" => "whois.kenic.or.ke",
        "or.ke" => "whois.kenic.or.ke",
        "sc.ke" => "whois.kenic.or.ke",
        "ac.kr" => "whois.krnic.net",
        "co.kr" => "whois.krnic.net",
        "go.kr" => "whois.krnic.net",
        "ne.kr" => "whois.krnic.net",
        "or.kr" => "whois.krnic.net",
        "pe.kr" => "whois.krnic.net",
        "re.kr" => "whois.krnic.net",
        "seoul.kr" => "whois.krnic.net",
        "kyonggi.kr" => "whois.krnic.net",
        "kz" => "whois.nic.kz",
        "la" => "whois.nic.la",
        "lt" => "whois.ripe.net",
        "ly" => "whois.nic.ly",
        "asn.lv" => "whois.ripe.net",
        "com.lv" => "whois.ripe.net",
        "conf.lv" => "whois.ripe.net",
        "edu.lv" => "whois.ripe.net",
        "gov.lv" => "whois.ripe.net",
        "id.lv" => "whois.ripe.net",
        "mil.lv" => "whois.ripe.net",
        "net.lv" => "whois.ripe.net",
        "org.lv" => "whois.ripe.net",
        "lv" => "whois.ripe.net",
        "co.ma" => "whois.iam.net.ma",
        "net.ma" => "whois.iam.net.ma",
        "org.ma" => "whois.iam.net.ma",
        "ac.ma" => "whois.iam.net.ma",
        "ma" => "whois.iam.net.ma",
        "tm.mc" => "whois.ripe.net",
        "asso.mc" => "whois.ripe.net",
        "mc" => "whois.ripe.net",
        "me" => "whois.meregistry.net",
        "mn" => "whois.nic.mn",
        "mobi" => "whois.dotmobiregistry.net",
        "ms" => "whois.adamsnames.tc",
        "com.mt" => "whois.nic.org.mt",
        "edu.mt" => "whois.nic.org.mt",
        "net.mt" => "whois.nic.org.mt",
        "org.mt" => "whois.nic.org.mt",
        "tm.mt" => "whois.nic.org.mt",
        "uu.mt" => "whois.nic.org.mt",
        "mt" => "whois.nic.org.mt",
        "mu" => "whois.nic.mu",
        "com.mx" => "whois.nic.mx",
        "edu.mx" => "whois.nic.mx",
        "gob.mx" => "whois.nic.mx",
        "net.mx" => "whois.nic.mx",
        "org.mx" => "whois.nic.mx",
        "mx" => "whois.nic.mx",
        "com.my" => "whois.mynic.net.my",
        "net.my" => "whois.mynic.net.my",
        "org.my" => "whois.mynic.net.my",
        "gov.my" => "whois.mynic.net.my",
        "edu.my" => "whois.mynic.net.my",
        "mil.my" => "whois.mynic.net.my",
        "my" => "whois.mynic.net.my",
        "com.na" => "whois.na-nic.com.na",
        "org.na" => "whois.na-nic.com.na",
        "alt.na" => "whois.na-nic.com.na",
        "co.na" => "whois.na-nic.com.na",
        "edu.na" => "whois.na-nic.com.na",
        "net.na" => "whois.na-nic.com.na",
        "nf" => "whois.nic.cx",
        "no" => "whois.norid.no",
        "nu" => "whois.nic.nu",
        "biz.pl" => "whois.dns.pl",
        "com.pl" => "whois.dns.pl",
        "net.pl" => "whois.dns.pl",
        "org.pl" => "whois.dns.pl",
        "info.pl" => "whois.dns.pl",
        "pl" => "whois.dns.pl",
        "cpa.pro" => "whois.registrypro.pro",
        "eng.pro" => "whois.registrypro.pro",
        "law.pro" => "whois.registrypro.pro",
        "med.pro" => "whois.registrypro.pro",
        "pro" => "whois.registrypro.pro",
        "pt" => "whois.dns.pt",
        "com.pt" => "whois.dns.pt",
        "nome.pt" => "whois.dns.pt",
        "pt" => "whois.dns.pt",
        "ac.nz" => "whois.domainz.net.nz",
        "co.nz" => "whois.domainz.net.nz",
        "cri.nz" => "whois.domainz.net.nz",
        "gen.nz" => "whois.domainz.net.nz",
        "govt.nz" => "whois.domainz.net.nz",
        "iwi.nz" => "whois.domainz.net.nz",
        "net.nz" => "whois.domainz.net.nz",
        "org.nz" => "whois.domainz.net.nz",
        "mil.nz" => "whois.domainz.net.nz",
        "pm" => "whois.nic.fr",
        "school.nz" => "whois.domainz.net.nz",
        "re" => "whois.nic.fr",
        "arts.ro" => "whois.rotld.ro",
        "com.ro" => "whois.rotld.ro",
        "firm.ro" => "whois.rotld.ro",
        "info.ro" => "whois.rotld.ro",
        "nom.ro" => "whois.rotld.ro",
        "nt.ro" => "whois.rotld.ro",
        "org.ro" => "whois.rotld.ro",
        "rec.ro" => "whois.rotld.ro",
        "store.ro" => "whois.rotld.ro",
        "tm.ro" => "whois.rotld.ro",
        "www.ro" => "whois.rotld.ro",
        "ro" => "whois.rotld.ro",
        "com.ru" => "whois.ripn.ru",
        "net.ru" => "whois.ripn.ru",
        "org.ru" => "whois.ripn.ru",
        "ru" => "whois.ripn.ru",
        "sb" => "whois.nic.net.sb",
        "sc" => "whois2.afilias-grs.net",
        "pp.se" => "whois.nic-se.se",
        "press.se" => "whois.nic-se.se",
        "org.se" => "whois.nic-se.se",
        "se" => "whois.nic-se.se",
        "com.sg" => "whois.nic.net.sg",
        "edu.sg" => "whois.nic.net.sg",
        "gov.sg" => "whois.nic.net.sg",
        "net.sg" => "whois.nic.net.sg",
        "org.sg" => "whois.nic.net.sg",
        "per.sg" => "whois.nic.net.sg",
        "sg" => "whois.nic.net.sg",
        "com.sh" => "whois.nic.sh",
        "co.sh" => "whois.nic.sh",
        "net.sh" => "whois.nic.sh",
        "org.sh" => "whois.nic.sh",
        "edu.sh" => "whois.nic.sh",
        "gov.sh" => "whois.nic.sh",
        "mil.sh" => "whois.nic.sh",
        "sh" => "whois.nic.sh",
        "si" => "whois.arnes.si",
        "sk" => "whois.sk-nic.sk",
        "sm" => "whois.ripe.net",
        "st" => "whois.nic.st",
        "su" => "whois.ripn.net",
        "tc" => "whois.adamsnames.tc",
        "tel" => "whois.nic.tel",
        "tf" => "whois.adamsnames.tc",
        "ac.th" => "whois.thnic.net",
        "co.th" => "whois.thnic.net",
        "go.th" => "whois.thnic.net",
        "in.th" => "whois.thnic.net",
        "mi.th" => "whois.thnic.net",
        "net.th" => "whois.thnic.net",
        "or.th" => "whois.thnic.net",
        "tj" => "whois.nic.tj",
        "tk" => "whois.dot.tk",
        "tl" => "whois.nic.tl",
        "tm" => "whois.nic.tm",
        "to" => "whois.tonic.to",
        "tp" => "whois.nic.tl",
        "bbs.tr" => "whois.metu.edu.tr",
        "com.tr" => "whois.metu.edu.tr",
        "edu.tr" => "whois.metu.edu.tr",
        "gen.tr" => "whois.metu.edu.tr",
        "gov.tr" => "whois.metu.edu.tr",
        "k12.tr" => "whois.metu.edu.tr",
        "mil.tr" => "whois.metu.edu.tr",
        "net.tr" => "whois.metu.edu.tr",
        "nom.tr" => "whois.metu.edu.tr",
        "org.tr" => "whois.metu.edu.tr",
        "web.tr" => "whois.metu.edu.tr",
        "travel" => "whois.nic.travel",
        "tv" => "whois.nic.tv",
        "com.tw" => "whois.twnic.net.tw",
        "ebiz.tw" => "whois.twnic.net.tw",
        "club.tw" => "whois.twnic.net.tw",
        "game.tw" => "whois.twnic.net.tw",
        "idv.tw" => "whois.twnic.net.tw",
        "net.tw" => "whois.twnic.net.tw",
        "org.tw" => "whois.twnic.net.tw",
        "tw" => "whois.twnic.net.tw",
        "com.ua" => "whois.com.ua",
        "edu.ua" => "whois.com.ua",
        "gov.ua" => "whois.com.ua",
        "org.ua" => "whois.com.ua",
        "net.ua" => "whois.com.ua",
        "ua" => "whois.com.ua",
        "ug" => "whois.co.ug",
        "co.ug" => "whois.co.ug",
        "or.ug" => "whois.co.ug",
        "ac.ug" => "whois.co.ug",
        "sc.ug" => "whois.co.ug",
        "go.ug" => "whois.co.ug",
        "ne.ug" => "whois.co.ug",
        "org.ug" => "whois.co.ug",
        "mil.ug" => "whois.co.ug",
        "co.uk" => "whois.nic.uk",
        "ltd.uk" => "whois.nic.uk",
        "me.uk" => "whois.nic.uk",
        "net.uk" => "whois.nic.uk",
        "org.uk" => "whois.nic.uk",
        "plc.uk" => "whois.nic.uk",
        "sch.uk" => "whois.nic.uk",
        "ac.uk" => "whois.ja.net",
        "gov.uk" => "whois.ja.net",
        "uk.co" => "whois.uk.co",
        "us" => "whois.nic.us",
        "com.uy" => "nic.uy",
        "org.uy" => "nic.uy",
        "net.uy" => "nic.uy",
        "edu.uy" => "nic.uy",
        "gub.uy" => "nic.uy",
        "mil.uy" => "nic.uy",
        "uz" => "whois.cctld.uz",
        "va" => "whois.ripe.net",
        "vc" => "whois2.afilias-grs.net",
        "co.ve" => "whois.nic.ve",
        "com.ve" => "whois.nic.ve",
        "net.ve" => "whois.nic.ve",
        "web.ve" => "whois.nic.ve",
        "nom.ve" => "whois.nic.ve",
        "firm.ve" => "whois.nic.ve",
        "store.ve" => "whois.nic.ve",
        "rec.ve" => "whois.nic.ve",
        "info.ve" => "whois.nic.ve",
        "org.ve" => "whois.nic.ve",
        "ve" => "whois.nic.ve",
        "vg" => "whois.adamsnames.tc",
        "wales.com" => "whois.wales.com",
        "wales.org" => "whois.wales.com",
        "wales.net" => "whois.wales.com",
        "cymru.org" => "whois.wales.com",
        "com.ws" => "whois.nic.ws",
        "edu.ws" => "whois.nic.ws",
        "gov.ws" => "whois.nic.ws",
        "net.ws" => "whois.nic.ws",
        "org.ws" => "whois.nic.ws",
        "ws" => "whois.nic.ws",
        "au.com" => "whois.au.com",
        "br.com" => "whois.centralnic.com",
        "cn.com" => "whois.centralnic.com",
        "de.com" => "whois.centralnic.com",
        "eu.com" => "whois.centralnic.com",
        "eu.org" => "whois.eu.org",
        "gb.com" => "whois.centralnic.com",
        "gb.net" => "whois.centralnic.com",
        "hu.com" => "whois.centralnic.com",
        "no.com" => "whois.centralnic.com",
        "qc.com" => "whois.centralnic.com",
        "ru.com" => "whois.centralnic.com",
        "sa.com" => "whois.centralnic.com",
        "se.com" => "whois.centralnic.com",
        "se.net" => "whois.centralnic.com",
        "uk.com" => "whois.centralnic.com",
        "uk.net" => "whois.centralnic.com",
        "us.com" => "whois.centralnic.com",
        "uy.com" => "whois.centralnic.com",
        "uz" => "whois.cctld.uz",
        "za.com" => "whois.centralnic.com",
        "za.net" => "whois.za.net",
        "za.org" => "whois.za.net",
        "aero" => "whois.information.aero",
        "com" => "whois.crsnic.net",
        "net" => "whois.crsnic.net",
        "org" => "whois.publicinterestregistry.net",
        "info" => "whois.afilias.net",
        "museum" => "whois.museum",
        "name" => "whois.nic.name",
        "biz" => "whois.neulevel.biz",
        "cc" => "whois.nic.cc",
        "edu" => "whois.educause.net",
        "mil" => "whois.nic.mil",
        "int" => "whois.iana.org",
        "coop" => "whois.nic.coop",
        "gov" => "whois.dotgov.gov"
    );

       if (isset($servers[$ext])) {
    	$nic_server = $servers[$ext];
    	$output = '';
    	
    	if ($conn = fsockopen ($nic_server, 43)) {
        	fputs($conn, $domain."\r\n");
       	 	while(!feof($conn)) {
            	$output .= fgets($conn,128);
        	}
        	fclose($conn);
   	}
    	else { die('Error: Could not connect to ' . $nic_server . '!'); }
	echo "<div id=\"whois-content\" >";
    	return $output;
	echo "</div><br><br><br>";
	}
}

function makeClickableLinks($text)
{
        $text = html_entity_decode($text);
        $text = " ".$text;
        $text = preg_replace('/(((f|ht){1}tp:\/\/)[-a-zA-Z0-9@:%_\+.~#?&\/\/=]+)/',
                '<a href="\\1" target=_blank>\\1</a>', $text);
        $text = preg_replace('/(((f|ht){1}tps:\/\/)[-a-zA-Z0-9@:%_\+.~#?&\/\/=]+)/',
                '<a href="\\1" target=_blank>\\1</a>', $text);
        $text = preg_replace('/([[:space:]()[{}])(www.[-a-zA-Z0-9@:%_\+.~#?&\/\/=]+)/',
        '\\1<a href="http://\\2" target=_blank>\\2</a>', $text);
        $text = preg_replace('/([_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,4})/',
        '<a href="mailto:\\1" target=_blank>\\1</a>', $text);
        return $text;
}

if (isset($_POST['domain'])){
	$domain = $_POST['domain'];
echo makeClickableLinks(nl2br(whois_query("$domain")));
} else {
	echo "";	
}

?>