// Generated by js_of_ocaml 2.4.1
(function(b){"use strict";var
b3=125,cA=254,ac=255,cr=224,ax='"',z=16777215,b2="\\\\",cq=250,az=1024,cc="jsError",a2=2147483,b1="input",a8=115,cz=512,at="formatblock",e="",d=128,cp="^",co=100,y="0",cy="</a>",cw="p",cx="fd ",aB="inserthtml",cn="[[",cm=1e3,aA="src/core/lwt.ml",a4="main.ml",ay=".",a3="+",ad=65535,b0="\n\n",ae=105,cb="%d",cv=-88,a7=110,ca=57343,cl=785140586,aw="'",ck=127,av="int_of_string",cj=-32,b$=982028505,bZ="cols",F=" ",a6="e",ci="I",cu="h1",b_="h3",ct="]]",T="-",au=-48,ch="nan",b9='<a href="',b7=240,b8=2048,cf="%.12g",cg=56320,a5=" : file already exists",b6="rows",ce="/",bY="5px",cd=114,b5="h2",cs="index out of bounds",b4="B";function
bh(a,b,c){var
d=String.fromCharCode;if(b==0&&c<=4096&&c==a.length)return d.apply(null,a);var
f=e;for(c+=b;b<c;b+=az)f+=d.apply(null,a.slice(b,Math.min(c,b+az)));return f}function
aC(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
A(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?bh(a.c,b,e):a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?bh(a.c,b,e):a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)aC(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
H(c,b){if(c.fun)return H(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return H(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return H(c,b.concat([a]))}}function
fS(a,b){throw[0,a,b]}function
aJ(a,b){if(b.repeat)return b.repeat(a);var
c=e,d=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;d++;if(d==9)b.slice(0,1)}}function
U(a){if(a.t==2)a.c+=aJ(a.l-a.c.length,"\0");else
a.c=bh(a.c,0,a.c.length);a.t=0}function
cE(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>ck)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
f4(a){for(var
l=e,f=e,i,h,j,b,c=0,k=a.length;c<k;c++){h=a.charCodeAt(c);if(h<d){for(var
g=c+1;g<k&&(h=a.charCodeAt(g))<d;g++);if(g-c>cz){f.substr(0,1);l+=f;f=e;l+=a.slice(c,g)}else
f+=a.slice(c,g);if(g==k)break;c=g}b=1;if(++c<k&&((j=a.charCodeAt(c))&-64)==d){i=j+(h<<6);if(h<cr){b=i-12416;if(b<d)b=1}else{b=2;if(++c<k&&((j=a.charCodeAt(c))&-64)==d){i=j+(i<<6);if(h<b7){b=i-925824;if(b<b8||b>=55295&&b<57344)b=2}else{b=3;if(++c<k&&((j=a.charCodeAt(c))&-64)==d&&h<245){b=j-63447168+(i<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;f+="\ufffd"}else
if(b>ad)f+=String.fromCharCode(55232+(b>>10),cg+(b&1023));else
f+=String.fromCharCode(b);if(f.length>az){f.substr(0,1);l+=f;f=e}}return l+f}function
f2(a){switch(a.t){case
9:return a.c;default:U(a);case
0:if(cE(a.c)){a.t=9;return a.c}a.t=8;case
8:return f4(a.c)}}function
p(a,b,c){this.t=a;this.c=b;this.l=c}p.prototype={toString:function(){return f2(this)}};function
c(a){return new
p(0,a,a.length)}function
bf(a,b){fS(a,c(b))}var
f=[0];function
P(a){bf(f[4],a)}function
fr(){P(cs)}function
j(a,b){if(b>>>0>=a.length-1)fr();return a}function
fs(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
ft(){return 0}function
o(a){if(a<0)P("String.create");return new
p(a?2:9,e,a)}function
fv(a,b,c,d){if(c>0)if(b==0&&(c>=a.l||a.t==2&&c>=a.c.length))if(d==0){a.c=e;a.t=2}else{a.c=aJ(c,String.fromCharCode(d));a.t=c==a.l?0:2}else{if(a.t!=4)aC(a);for(c+=b;b<c;b++)a.c[b]=d}return 0}function
a9(a){if((a.t&6)!=0)U(a);return a.c}function
be(a){a=a9(a);var
e=a.length;if(e>31)P("format_int: format too long");var
b={justify:a3,signstyle:T,filler:F,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:"f"};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case"-":b.justify=T;break;case"+":case" ":b.signstyle=c;break;case"0":b.filler=y;break;case"#":b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case".":b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case"x":b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case"e":case"f":case"g":b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
a_(a,b){if(a.uppercase)b=b.toUpperCase();var
g=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=T))g++;if(a.alternate){if(a.base==8)g+=1;if(a.base==16)g+=2}var
d=e;if(a.justify==a3&&a.filler==F)for(var
f=g;f<a.width;f++)d+=F;if(a.signedconv)if(a.sign<0)d+=T;else
if(a.signstyle!=T)d+=a.signstyle;if(a.alternate&&a.base==8)d+=y;if(a.alternate&&a.base==16)d+="0x";if(a.justify==a3&&a.filler==y)for(var
f=g;f<a.width;f++)d+=y;d+=b;if(a.justify==T)for(var
f=g;f<a.width;f++)d+=F;return c(d)}function
a$(a,b){var
c,f=be(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=ch;f.filler=F}else
if(!isFinite(b)){c="inf";f.filler=F}else
switch(f.conv){case"e":var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==a6)c=c.slice(0,d-1)+y+c.slice(d-1);break;case"f":c=b.toFixed(e);break;case"g":e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(a6),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==y)d--;if(c.charAt(d)==ay)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==a6)c=c.slice(0,d-1)+y+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==y)d--;if(c.charAt(d)==ay)d--;c=c.slice(0,d+1)}}break}return a_(f,c)}function
aE(a,b){if(a9(a)==cb)return c(e+b);var
d=be(a);if(b<0)if(d.signedconv){d.sign=-1;b=-b}else
b>>>=0;var
f=b.toString(d.base);if(d.prec>=0){d.filler=F;var
g=d.prec-f.length;if(g>0)f=aJ(g,y)+f}return a_(d,f)}function
fx(){return 0}function
fz(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fJ(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
fV(a,b){a.t&6&&U(a);b.t&6&&U(b);return a.c<b.c?-1:a.c>b.c?1:0}function
cB(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
p)if(b
instanceof
p){if(a!==b){var
d=fV(a,b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===cA)f=0;if(f===cq){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===cA)g=0;if(g===cq){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
248:var
d=fJ(a[2],b[2]);if(d!=0)return d;break;case
251:P("equal: abstract value");case
255:var
d=fz(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
p||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
fy(a,b){return+(cB(a,b,false)>=0)}function
fC(a){return(a[3]|a[2]|a[1])==0}function
fF(a){return[ac,a&z,a>>24&z,a>>31&ad]}function
fG(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[ac,c&z,d&z,e&ad]}function
cD(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
cC(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&z;a[1]=a[1]<<1&z}function
fD(a){a[1]=(a[1]>>>1|a[2]<<23)&z;a[2]=(a[2]>>>1|a[3]<<23)&z;a[3]=a[3]>>>1}function
fI(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[ac,0,0,0];while(cD(d,c)>0){e++;cC(c)}while(e>=0){e--;cC(f);if(cD(d,c)>=0){f[1]++;d=fG(d,c)}fD(c)}return[0,f,d]}function
fH(a){return a[1]|a[2]<<24}function
fB(a){return a[3]<<16<0}function
fE(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[ac,b&z,c&z,d&ad]}function
fA(a,b){var
c=be(a);if(c.signedconv&&fB(b)){c.sign=-1;b=fE(b)}var
d=e,i=fF(c.base),h="0123456789abcdef";do{var
g=fI(b,i);b=g[1];d=h.charAt(fH(g[2]))+d}while(!fC(b));if(c.prec>=0){c.filler=F;var
f=c.prec-d.length;if(f>0)d=aJ(f,y)+d}return a_(c,d)}function
m(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
h(a){return a.l}function
fR(a){var
b=0,d=h(a),c=10,e=d>0&&m(a,0)==45?(b++,-1):1;if(b+1<d&&m(a,b)==48)switch(m(a,b+1)){case
120:case
88:c=16;b+=2;break;case
111:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,e,c]}function
cM(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
aD(a){bf(f[3],a)}function
fK(a){var
i=fR(a),d=i[0],j=i[1],e=i[2],g=h(a),k=-1>>>0,f=d<g?m(a,d):0,c=cM(f);if(c<0||c>=e)aD(av);var
b=c;for(d++;d<g;d++){f=m(a,d);if(f==95)continue;c=cM(f);if(c<0||c>=e)break;b=e*b+c;if(b>k)aD(av)}if(d!=g)aD(av);b=j*b;if(e==10&&(b|0)!=b)aD(av);return b|0}function
bb(a){return+(a>31&&a<ck)}function
fL(){var
c=b.console?b.console:{},d=["log","debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
e(){}for(var
a=0;a<d.length;a++)if(!c[d[a]])c[d[a]]=e;return c}var
aF={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
cF(a){if(!aF.all.test(a))return a;return a.replace(aF.amp,"&amp;").replace(aF.lt,"&lt;").replace(aF.quot,"&quot;")}function
f5(a){for(var
h=e,c=h,b,j,f=0,i=a.length;f<i;f++){b=a.charCodeAt(f);if(b<d){for(var
g=f+1;g<i&&(b=a.charCodeAt(g))<d;g++);if(g-f>cz){c.substr(0,1);h+=c;c=e;h+=a.slice(f,g)}else
c+=a.slice(f,g);if(g==i)break;f=g}if(b<b8){c+=String.fromCharCode(192|b>>6);c+=String.fromCharCode(d|b&63)}else
if(b<55296||b>=ca)c+=String.fromCharCode(cr|b>>12,d|b>>6&63,d|b&63);else
if(b>=56319||f+1==i||(j=a.charCodeAt(f+1))<cg||j>ca)c+="\xef\xbf\xbd";else{f++;b=(b<<10)+j-56613888;c+=String.fromCharCode(b7|b>>18,d|b>>12&63,d|b>>6&63,d|b&63)}if(c.length>az){c.substr(0,1);h+=c;c=e}}return h+c}function
D(a){var
b=9;if(!cE(a))b=8,a=f5(a);return new
p(b,a,a.length)}function
bc(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return H(a,b)}}function
Q(a,b){var
a=a+1|0,c=new
Array(a);c[0]=0;for(var
d=1;d<a;d++)c[d]=b;return c}function
r(a){bf(f[2],a)}function
bd(a){if(!a.opened)r("Cannot flush a closed channel");if(a.buffer==e)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=e;return 0}function
G(a){this.data=a}G.prototype={truncate:function(){this.data=o(0)}};function
cN(a){a=a
instanceof
p?a.toString():a;r(a+": No such file or directory")}var
fu=ce;function
aG(a){a=a
instanceof
p?a.toString():a;if(a.charCodeAt(0)!=47)a=fu+a;var
d=a.split(ce),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(e);break;default:b.push(d[c]);break}b.orig=a;return b}function
O(){this.content={}}O.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
aI=new
O();aI.mk(e,new
O());function
ba(a){var
b=aI;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))cN(a.orig);b=b.get(a[c])}return b}function
f1(a){var
c=aG(a),b=ba(c);return b
instanceof
O?1:0}function
fX(a){return new
p(4,a,a.length)}function
f_(a){if(a.t!=4)aC(a);return a.c}function
fw(a,b){var
f=aG(a),d=aI;for(var
g=0;g<f.length-1;g++){var
e=f[g];if(!d.exists(e))d.mk(e,new
O());d=d.get(e);if(!(d
instanceof
O))r(f.orig+a5)}var
e=f[f.length-1];if(d.exists(e))r(f.orig+a5);if(b
instanceof
O)d.mk(e,b);else
if(b
instanceof
G)d.mk(e,b);else
if(b
instanceof
p)d.mk(e,new
G(b));else
if(b
instanceof
Array)d.mk(e,new
G(fX(b)));else
if(b.toString)d.mk(e,new
G(c(b.toString())));else
P("caml_fs_register");return 0}function
f0(a){var
b=aI,d=aG(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
af(a,b,c){if(f.fds===undefined)f.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?h(b.data):0;d.flags=c;f.fds[a]=d;f.fd_last_idx=a;return a}function
f$(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
g=a.toString(),i=aG(a);if(d.rdonly&&d.wronly)r(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)r(g+" : flags Open_text and Open_binary are not compatible");if(f0(a)){if(f1(a))r(g+" : is a directory");if(d.create&&d.excl)r(g+a5);var
h=f.fd_last_idx?f.fd_last_idx:0,e=ba(i);if(d.truncate)e.truncate();return af(h+1,e,d)}else
if(d.create){var
h=f.fd_last_idx?f.fd_last_idx:0;fw(a,o(0));var
e=ba(i);return af(h+1,e,d)}else
cN(a)}af(0,new
G(o(0)));af(1,new
G(o(0)));af(2,new
G(o(0)));function
fM(a){var
b=f.fds[a];if(b.flags.wronly)r(cx+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true}}function
f6(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}function
f7(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}var
aH=new
Array();function
fU(a,b){var
i=c(b),d=h(i),g=h(a.file.data),f=a.offset;if(f+d>=g){var
e=o(f+d);A(a.file.data,0,e,0,g);A(i,0,e,f,d);a.file.data=e}a.offset+=d;return 0}function
cG(a){var
b;switch(a){case
1:b=f7;break;case
2:b=f6;break;default:b=fU}var
d=f.fds[a];if(d.flags.rdonly)r(cx+a+" is readonly");var
c={file:d.file,offset:d.offset,fd:a,opened:true,buffer:e,output:b};aH[c.fd]=c;return c}function
fN(){var
a=0;for(var
b
in
aH)if(aH[b].opened)a=[0,aH[b],a];return a}function
cH(a,b,c,d){if(!a.opened)r("Cannot output to a closed channel");var
f;if(c==0&&h(b)==d)f=b;else{f=o(d);A(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);bd(a);a.buffer+=e.substr(g+1)}return 0}function
cI(a,b){var
d=c(String.fromCharCode(b));cH(a,d,0,1);return 0}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&ad)*b|0};var
cJ=Math.imul;function
fP(a,b){return+(cB(a,b,false)!=0)}function
fQ(a){return+(a
instanceof
Array)}function
cL(a){return a
instanceof
Array?a[0]:cm}function
a(a,b){f[a+1]=b}var
cK={};function
fT(a,b){cK[a9(a)]=b;return 0}function
cO(){P(cs)}function
w(a,b){if(b>>>0>=a.l)cO();return m(a,b)}function
fW(a,b){a.t&6&&U(a);b.t&6&&U(b);return a.c==b.c?1:0}function
g(a,b){return 1-fW(a,b)}function
l(a,b,c){c&=ac;if(a.t!=4){if(b==a.c.length){a.c+=String.fromCharCode(c);if(b+1==a.l)a.t=0;return 0}aC(a)}a.c[b]=c;return 0}function
bg(a,b,c){if(b>>>0>=a.l)cO();return l(a,b,c)}function
fY(){return 32}function
fZ(a){var
c=b;if(c.quit)c.quit(a);if(c.process&&c.process.exit)c.process.exit(a);P("Function 'exit' not implemented")}function
aK(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
E(a,b){return{joo_tramp:a,joo_args:b}}function
f3(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
fO(a){return cK[a]}function
aL(a){if(a
instanceof
Array)return a;if(b.RangeError&&a
instanceof
b.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,f[9]];if(b.InternalError&&a
instanceof
b.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,f[9]];if(a
instanceof
b.Error)return[0,fO(cc),a];return[0,f[3],D(String(a))]}function
i(a,b){return a.length==1?a(b):H(a,[b])}function
s(a,b,c){return a.length==2?a(b,c):H(a,[b,c])}function
n(a,b,c,d){return a.length==3?a(b,c,d):H(a,[b,c,d])}function
as(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):H(a,[b,c,d,e,f])}var
bD=[0,c("Out_of_memory")],aN=[0,c("Failure")],bi=[0,c("Invalid_argument")],bF=[0,c("Match_failure")],bE=[0,c("Stack_overflow")],u=[0,c("Assert_failure")],bG=[0,c("Undefined_recursive_module")],aS=c('File "%s", line %d, characters %d-%d: %s');a(11,bG);a(10,u);a(9,[0,c("Sys_blocked_io")]);a(8,bE);a(7,bF);a(6,[0,c("Not_found")]);a(5,[0,c("Division_by_zero")]);a(4,[0,c("End_of_file")]);a(3,bi);a(2,aN);a(1,[0,c("Sys_error")]);a(0,bD);var
cT=c(cf),cS=c(ay),cQ=c("true"),cR=c("false"),cX=c("\\b"),cY=c("\\t"),cZ=c("\\n"),c0=c("\\r"),cW=c(b2),cV=c("\\'"),c3=c(e),c2=c("String.blit"),c1=c("String.sub"),c4=c("Queue.Empty"),c6=c("Buffer.add: cannot grow buffer"),dl=c(e),dm=c(e),dq=c(cf),dr=c(ax),ds=c(ax),dn=c(aw),dp=c(aw),dk=c(ch),di=c("neg_infinity"),dj=c("infinity"),dh=c(ay),dg=c("printf: bad positional specification (0)."),df=c("%_"),de=[0,c("printf.ml"),143,8],db=c(aw),dc=c("Printf: premature end of format string '"),c9=c(aw),c_=c(" in format string '"),c$=c(", at char number "),da=c("Printf: bad conversion %"),c7=c("Sformat.index_of_int: negative argument "),dx=c(e),dy=c(", %s%s"),dP=[1,1],dQ=c("%s\n"),dR=c("(Program not linked with -g, cannot print stack backtrace)\n"),dJ=c("Raised at"),dM=c("Re-raised at"),dN=c("Raised by primitive operation at"),dO=c("Called from"),dK=c('%s file "%s", line %d, characters %d-%d'),dL=c("%s unknown location"),dE=c("Out of memory"),dF=c("Stack overflow"),dG=c("Pattern matching failed"),dH=c("Assertion failed"),dI=c("Undefined recursive module"),dA=c("(%s%s)"),dB=c(e),dC=c(e),dD=c("(%s)"),dw=c(cb),du=c("%S"),dv=c("_"),d3=[0,c(aA),648,20],d4=[0,c(aA),651,8],d0=[0,c(aA),498,8],dY=[0,c(aA),487,9],dW=c("Lwt.wakeup_result"),dT=c("Fatal error: exception "),dS=c("Lwt.Canceled"),d9=c("Js.Error"),eb=c("iframe"),ea=c("br"),d$=c("textarea"),d_=c(b1),ef=c("Exception during Lwt.async: "),eO=c("^error_in_anchor^"),eD=[0,c(a4),72,76],eE=c("global"),eF=c("wiki"),eG=c("^error2_in_anchor^"),eH=[0,c(ct),0],eI=c(cn),eJ=c(e),eK=[0,c(ct),0],eL=c("|"),eM=c(cn),eN=c(e),eC=[0,c(a4),67,35],ej=c("#text"),ek=c("A"),el=c(b4),em=c("BR"),en=c("DIV"),eo=c("H1"),ep=c("H2"),eq=c("H3"),er=c("HR"),es=c(ci),et=c("P"),eu=c(cp),ev=c(cp),ew=c(b0),ex=[0,c("//")],ey=c("----"),eA=c(b2),eB=[0,c("**")],ez=c(b0),ei=c(e),fi=c("lololo"),fj=c("Enter a wikipage"),fk=c(e),fl=[0,c(cy),0],fm=c('" wysitype="wiki">'),fn=c(b9),e_=c("http://google.ru"),e$=c("Enter a link"),fa=c("desc"),fb=c("Enter description"),fc=[0,c(cy),0],fd=c('" wysitype="global">'),fe=c(b9),ff=c(e),eQ=c("inserthorizontalrule"),eR=c("hr"),eS=c("removeformat"),eT=c("remove format"),eU=c("bold"),eV=c(b4),eW=c("italic"),eX=c(ci),eY=c(at),eZ=c(cw),e0=[0,[0,c(cw)]],e1=c(at),e2=c(cu),e3=[0,[0,c(cu)]],e4=c(at),e5=c(b5),e6=[0,[0,c(b5)]],e7=c(at),e8=c(b_),e9=[0,[0,c(b_)]],fg=c(aB),fh=c("link"),fo=c(aB),fp=c("link2wiki"),fq=c(e),eP=[0,c(a4),96,17],eg=c("Main.Break");function
aM(a){throw[0,aN,a]}function
V(a){throw[0,bi,a]}function
cP(a,b){return fy(a,b)?a:b}function
k(a,b){var
c=h(a),e=h(b),d=o(c+e|0);A(a,0,d,0,c);A(b,0,d,c,e);return d}function
aO(a){return c(e+a)}fM(0);cG(1);var
W=cG(2);function
bj(a,b){return cH(a,b,0,h(b))}function
bk(a){return bj(W,a)}function
bl(a){function
b(a){var
b=a;for(;;){if(b){var
c=b[2],d=b[1];try{bd(d)}catch(f){}var
b=c;continue}return 0}}return b(fN(0))}function
cU(a,b){return cI(a,b)}function
bm(a){return bd(a)}function
bn(a,b){var
c=b;for(;;){if(c){var
d=c[2];i(a,c[1]);var
c=d;continue}return 0}}function
X(a,b){var
c=o(a);fv(c,0,a,b);return c}function
ag(a,b,c){if(0<=b)if(0<=c)if(!((h(a)-c|0)<b)){var
d=o(c);A(a,b,d,0,c);return d}return V(c1)}function
ah(a,b,c,d,e){if(0<=e)if(0<=b)if(!((h(a)-e|0)<b))if(0<=d)if(!((h(c)-e|0)<d))return A(a,b,c,d,e);return V(c2)}function
ai(d,b){if(b){var
a=b[1],g=[0,0],f=[0,0],i=b[2];bn(function(a){g[1]++;f[1]=f[1]+h(a)|0;return 0},b);var
e=o(f[1]+cJ(h(d),g[1]-1|0)|0);A(a,0,e,0,h(a));var
c=[0,h(a)];bn(function(a){A(d,0,e,c[1],h(d));c[1]=c[1]+h(d)|0;A(a,0,e,c[1],h(a));c[1]=c[1]+h(a)|0;return 0},i);return e}return c3}var
aP=fY(0),Y=cJ(aP/8|0,(1<<(aP-10|0))-1|0)-1|0,c5=[0,c4];function
aj(a){var
b=1<=a?a:1,c=Y<b?Y:b,d=o(c);return[0,d,0,c,d]}function
ak(a){return ag(a[1],0,a[2])}function
bo(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(Y<c[1])if((a[2]+b|0)<=Y)c[1]=Y;else
aM(c6);var
d=o(c[1]);ah(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
Z(a,b){var
c=a[2];if(a[3]<=c)bo(a,1);bg(a[1],c,b);a[2]=c+1|0;return 0}function
q(a,b){var
c=h(b),d=a[2]+c|0;if(a[3]<d)bo(a,c);ah(b,0,a[1],a[2],c);a[2]=d;return 0}function
aQ(a){return 0<=a?a:aM(k(c7,aO(a)))}function
bp(a,b){return aQ(a+b|0)}var
c8=1;function
bq(a){return bp(c8,a)}function
br(a){return ag(a,0,h(a))}function
bs(a,b,c){var
d=k(c_,k(a,c9)),e=k(c$,k(aO(b),d));return V(k(da,k(X(1,c),e)))}function
_(a,b,c){return bs(br(a),b,c)}function
al(a){return V(k(dc,k(br(a),db)))}function
dd(d){function
a(a,b){var
e=a,c=b;for(;;){if(h(d)<=c)return[0,0,e];var
f=m(d,c);if(49<=f){if(!(58<=f))return[0,fK(ag(d,c,(h(d)-c|0)-1|0)),e]}else
if(45===f){var
e=1,c=c+1|0;continue}var
c=c+1|0;continue}}try{var
b=a(0,1)}catch(f){f=aL(f);if(f[1]===aN)return bs(d,0,a8);throw f}return b}function
I(i,b,c,d){function
j(a){if(9<(m(i,a)+au|0)>>>0)return a;var
b=a+1|0;for(;;){var
c=m(i,b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
k=j(b+1|0),f=aj((c-k|0)+10|0);Z(f,37);var
e=d,h=0;for(;;){if(e){var
n=[0,e[1],h],e=e[2],h=n;continue}var
a=k,g=h;for(;;){if(a<=c){var
l=m(i,a);if(42===l){if(g){var
o=g[2];q(f,aO(g[1]));var
a=j(a+1|0),g=o;continue}throw[0,u,de]}Z(f,l);var
a=a+1|0;continue}return ak(f)}}}function
bt(a,b,c,d,e){var
f=I(b,c,d,e);if(78!==a)if(a7!==a)return f;bg(f,h(f)-1|0,117);return f}function
bu(a){return function(d,b){var
j=h(d);function
k(a,b){var
m=40===a?41:b3,c=b;for(;;){if(j<=c)return al(d);if(37===w(d,c)){var
e=c+1|0;if(j<=e)return al(d);var
f=w(d,e),h=f-40|0;if(1<h>>>0){var
l=h-83|0;if(2<l>>>0)var
g=1;else
switch(l){case
0:var
i=0,g=0;break;case
1:var
g=1;break;default:var
i=1,g=0}if(g){var
c=e+1|0;continue}}else
var
i=0===h?0:1;if(i)return f===m?e+1|0:_(d,b,f);var
c=k(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return k(a,b)}}function
bv(i,b,c){var
l=h(i)-1|0;function
r(a){var
k=a;a:for(;;){if(k<l){if(37===w(i,k)){var
f=0,h=k+1|0;for(;;){if(l<h)var
e=al(i);else{var
o=m(i,h);if(58<=o){if(95===o){var
f=1,h=h+1|0;continue}}else
if(32<=o)switch(o+cj|0){case
10:var
h=n(b,f,h,ae);continue;case
0:case
3:case
11:case
13:var
h=h+1|0;continue;case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(l<d)var
e=al(i);else{var
j=m(i,d);if(126<=j)var
g=0;else
switch(j){case
40:var
e=r(n(b,f,d,j)),g=1;break;case
123:var
v=n(b,f,d,j),x=s(bu(j),i,v),p=v;for(;;){if(p<(x-2|0)){var
p=s(c,p,w(i,p));continue}var
d=x-1|0;continue b}case
67:case
99:var
e=n(b,f,d,99),g=1;break;case
66:case
98:var
e=n(b,f,d,66),g=1;break;case
41:case
125:var
e=n(b,f,d,j),g=1;break;case
83:case
91:case
115:var
e=n(b,f,d,a8),g=1;break;case
97:case
114:case
116:var
e=n(b,f,d,j),g=1;break;case
76:case
108:case
110:var
t=d+1|0;if(l<t)var
e=n(b,f,d,ae),g=1;else{var
u=w(i,t)+cv|0;if(32<u>>>0)var
q=1;else
switch(u){case
0:case
12:case
17:case
23:case
29:case
32:var
e=s(c,n(b,f,d,j),ae),g=1,q=0;break;default:var
q=1}if(q)var
e=n(b,f,d,ae),g=1}break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
69:case
70:case
71:case
101:case
102:case
103:var
e=n(b,f,d,102),g=1;break;case
78:case
88:case
100:case
105:case
111:case
117:case
120:var
e=n(b,f,d,ae),g=1;break;default:var
g=0}if(!g)var
e=_(i,d,j)}break}}var
k=e;continue a}}var
k=k+1|0;continue}return k}}r(0);return 0}function
bw(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?b3!==c?1:0:f;if(g){var
e=97===c?2:1;if(cd===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}bv(a,b,function(a,b){return a+1|0});return d[1]}function
bx(a,b,c){var
g=m(a,c);if(9<(g+au|0)>>>0)return s(b,0,c);var
e=g+au|0,d=c+1|0;for(;;){var
f=m(a,d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+au|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aM(dg):s(b,[0,aQ(e-1|0)],d+1|0);return s(b,0,c)}}function
t(a,b){return a?b:bq(b)}function
by(a,b){return a?a[1]:b}function
bz(aI,b,c,d,e,f,g){var
E=i(b,g);function
ac(a){return s(d,E,a)}function
aJ(a,b,n,aK){var
u=h(n);function
F(x,b){var
r=b;for(;;){if(u<=r)return i(a,E);var
d=m(n,r);if(37===d){var
p=function(a,b){var
c=by(a,b);return j(aK,c)[c+1]},ar=function(g,f,c,d){var
a=d;for(;;){var
as=m(n,a)+cj|0;if(!(25<as>>>0))switch(as){case
10:return bx(n,function(a,b){var
d=[0,p(a,f),c];return ar(g,t(a,f),d,b)},a+1|0);case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;default:var
a=a+1|0;continue}var
u=m(n,a);if(!(124<=u))switch(u){case
33:i(e,E);return F(f,a+1|0);case
41:return v(f,dl,a+1|0);case
44:return v(f,dm,a+1|0);case
70:var
aa=p(g,f);if(0===c)var
aw=dq;else{var
Y=I(n,r,a,c);if(70===u)bg(Y,h(Y)-1|0,103);var
aw=Y}var
aq=fs(aa);if(3===aq)var
ab=aa<0?di:dj;else
if(4<=aq)var
ab=dk;else{var
R=a$(aw,aa),Q=0,aT=h(R);for(;;){if(aT<=Q)var
ap=k(R,dh);else{var
$=w(R,Q)-46|0,bc=23<$>>>0?55===$?1:0:21<($-1|0)>>>0?1:0;if(!bc){var
Q=Q+1|0;continue}var
ap=R}var
ab=ap;break}}return v(t(g,f),ab,a+1|0);case
91:return _(n,a,u);case
97:var
aD=p(g,f),aF=bq(by(g,f)),aG=p(0,aF),a5=a+1|0,a6=t(g,aF);if(aI)ac(s(aD,0,aG));else
s(aD,E,aG);return F(a6,a5);case
114:return _(n,a,u);case
116:var
aH=p(g,f),a9=a+1|0,a_=t(g,f);if(aI)ac(i(aH,0));else
i(aH,E);return F(a_,a9);case
37:case
64:return v(f,X(1,u),a+1|0);case
83:case
115:var
B=p(g,f);if(a8===u)var
C=B;else{var
b=[0,0],al=h(B)-1|0,aL=0;if(!(al<0)){var
M=aL;for(;;){var
A=m(B,M),bd=14<=A?34===A?1:92===A?1:0:11<=A?13<=A?1:0:8<=A?1:0,aO=bd?2:bb(A)?1:4;b[1]=b[1]+aO|0;var
aP=M+1|0;if(al!==M){var
M=aP;continue}break}}if(b[1]===h(B))var
aC=B;else{var
j=o(b[1]);b[1]=0;var
am=h(B)-1|0,aM=0;if(!(am<0)){var
K=aM;for(;;){var
z=m(B,K),L=z-34|0;if(58<L>>>0)if(-20<=L)var
U=1;else{switch(L+34|0){case
8:l(j,b[1],92);b[1]++;l(j,b[1],98);var
J=1;break;case
9:l(j,b[1],92);b[1]++;l(j,b[1],116);var
J=1;break;case
10:l(j,b[1],92);b[1]++;l(j,b[1],a7);var
J=1;break;case
13:l(j,b[1],92);b[1]++;l(j,b[1],cd);var
J=1;break;default:var
U=1,J=0}if(J)var
U=0}else
var
U=56<(L-1|0)>>>0?(l(j,b[1],92),b[1]++,l(j,b[1],z),0):1;if(U)if(bb(z))l(j,b[1],z);else{l(j,b[1],92);b[1]++;l(j,b[1],48+(z/co|0)|0);b[1]++;l(j,b[1],48+((z/10|0)%10|0)|0);b[1]++;l(j,b[1],48+(z%10|0)|0)}b[1]++;var
aN=K+1|0;if(am!==K){var
K=aN;continue}break}}var
aC=j}var
C=k(ds,k(aC,dr))}if(a===(r+1|0))var
aB=C;else{var
an=dd(I(n,r,a,c)),N=an[1],D=h(C),aQ=an[2],O=0,aR=32;if(N===D)if(0===O)var
W=C,ad=1;else
var
ad=0;else
var
ad=0;if(!ad)if(N<=D)var
W=ag(C,O,D);else{var
V=X(N,aR);if(aQ)ah(C,O,V,0,D);else
ah(C,O,V,N-D|0,D);var
W=V}var
aB=W}return v(t(g,f),aB,a+1|0);case
67:case
99:var
x=p(g,f);if(99===u)var
av=X(1,x);else{if(39===x)var
y=cV;else
if(92===x)var
y=cW;else{if(14<=x)var
G=0;else
switch(x){case
8:var
y=cX,G=1;break;case
9:var
y=cY,G=1;break;case
10:var
y=cZ,G=1;break;case
13:var
y=c0,G=1;break;default:var
G=0}if(!G)if(bb(x)){var
ai=o(1);l(ai,0,x);var
y=ai}else{var
H=o(4);l(H,0,92);l(H,1,48+(x/co|0)|0);l(H,2,48+((x/10|0)%10|0)|0);l(H,3,48+(x%10|0)|0);var
y=H}}var
av=k(dp,k(y,dn))}return v(t(g,f),av,a+1|0);case
66:case
98:var
aU=a+1|0,aV=p(g,f)?cQ:cR;return v(t(g,f),aV,aU);case
40:case
123:var
S=p(g,f),at=s(bu(u),n,a+1|0);if(123===u){var
P=aj(h(S)),ao=function(a,b){Z(P,b);return a+1|0};bv(S,function(a,b,c){if(a)q(P,df);else
Z(P,37);return ao(b,c)},ao);var
aS=ak(P);return v(t(g,f),aS,at)}var
au=t(g,f),ba=bp(bw(S),au);return aJ(function(a){return F(ba,at)},au,S,aK);case
76:case
108:case
110:var
ax=m(n,a+1|0)+cv|0;if(!(32<ax>>>0))switch(ax){case
0:case
12:case
17:case
23:case
29:case
32:var
T=a+1|0,ay=u-108|0;if(2<ay>>>0)var
ae=0;else{switch(ay){case
0:var
a1=p(g,f),aA=aE(I(n,r,T,c),a1),af=1;break;case
1:var
ae=0,af=0;break;default:var
a2=p(g,f),aA=aE(I(n,r,T,c),a2),af=1}if(af)var
az=aA,ae=1}if(!ae)var
a0=p(g,f),az=fA(I(n,r,T,c),a0);return v(t(g,f),az,T+1|0)}var
aY=p(g,f),aZ=aE(bt(a7,n,r,a,c),aY);return v(t(g,f),aZ,a+1|0);case
69:case
71:case
101:case
102:case
103:var
aW=p(g,f),aX=a$(I(n,r,a,c),aW);return v(t(g,f),aX,a+1|0);case
78:case
88:case
100:case
105:case
111:case
117:case
120:var
a3=p(g,f),a4=aE(bt(u,n,r,a,c),a3);return v(t(g,f),a4,a+1|0)}return _(n,a,u)}},f=r+1|0,g=0;return bx(n,function(a,b){return ar(a,x,g,b)},f)}s(c,E,d);var
r=r+1|0;continue}}function
v(a,b,c){ac(b);return F(a,c)}return F(b,0)}var
u=aQ(0);function
n(a,b){return aJ(f,u,a,b)}var
p=bw(g);if(6<p>>>0){var
r=function(f,b){if(p<=f){var
h=Q(p,0),i=function(a,b){var
c=(p-a|0)-1|0;return j(h,c)[c+1]=b},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){i(c,e);var
c=c+1|0,a=d;continue}i(c,e)}return n(g,h)}}return function(a){return r(f+1|0,[0,a,b])}};return r(0,0)}switch(p){case
0:return n(g,[0]);case
1:return function(a){var
b=Q(1,0);j(b,0)[0+1]=a;return n(g,b)};case
2:return function(a,b){var
c=Q(2,0);j(c,0)[0+1]=a;j(c,1)[1+1]=b;return n(g,c)};case
3:return function(a,b,c){var
d=Q(3,0);j(d,0)[0+1]=a;j(d,1)[1+1]=b;j(d,2)[2+1]=c;return n(g,d)};case
4:return function(a,b,c,d){var
e=Q(4,0);j(e,0)[0+1]=a;j(e,1)[1+1]=b;j(e,2)[2+1]=c;j(e,3)[3+1]=d;return n(g,e)};case
5:return function(a,b,c,d,e){var
f=Q(5,0);j(f,0)[0+1]=a;j(f,1)[1+1]=b;j(f,2)[2+1]=c;j(f,3)[3+1]=d;j(f,4)[4+1]=e;return n(g,f)};default:return function(a,b,c,d,e,f){var
h=Q(6,0);j(h,0)[0+1]=a;j(h,1)[1+1]=b;j(h,2)[2+1]=c;j(h,3)[3+1]=d;j(h,4)[4+1]=e;j(h,5)[5+1]=f;return n(g,h)}}}function
bA(d){function
e(a){return 0}function
b(a){return d}var
c=0;return function(a){return bz(c,b,cU,bj,bm,e,a)}}function
dt(a){return aj(2*h(a)|0)}function
v(a){function
b(a){var
b=ak(a);a[2]=0;return b}return bz(1,dt,Z,q,function(a){return 0},b,a)}var
aR=[0,0];function
aT(a,b){var
c=a[b+1];if(fQ(c)){if(cL(c)===252)return i(v(du),c);if(cL(c)===253){var
e=a$(cT,c),d=0,g=h(e);for(;;){if(g<=d)return k(e,cS);var
f=w(e,d),j=48<=f?58<=f?0:1:45===f?1:0;if(j){var
d=d+1|0;continue}return e}}return dv}return i(v(dw),c)}function
bB(a,b){if(a.length-1<=b)return dx;var
c=bB(a,b+1|0),d=aT(a,b);return s(v(dy),d,c)}function
dz(a){var
b=a.length-1;if(2<b>>>0){var
c=bB(a,2),d=aT(a,1);return s(v(dA),d,c)}switch(b){case
0:return dB;case
1:return dC;default:var
e=aT(a,1);return i(v(dD),e)}}function
bC(b){function
a(a){var
c=a;for(;;){if(c){var
m=c[2],n=c[1];try{var
o=i(n,b),d=o}catch(f){var
d=0}if(d)return d[1];var
c=m;continue}if(b[1]===bD)return dE;if(b[1]===bE)return dF;if(b[1]===bF){var
e=b[2],h=e[3],p=e[2],q=e[1];return as(v(aS),q,p,h,h+5|0,dG)}if(b[1]===u){var
f=b[2],j=f[3],r=f[2],s=f[1];return as(v(aS),s,r,j,j+6|0,dH)}if(b[1]===bG){var
g=b[2],l=g[3],t=g[2],w=g[1];return as(v(aS),w,t,l,l+6|0,dI)}var
x=b[0+1][0+1];return k(x,dz(b))}}return a(aR[1])}function
bH(a){var
h=ft(fx(0));if(h){var
d=h[1],f=d.length-1-1|0,p=0;if(!(f<0)){var
b=p;for(;;){if(fP(j(d,b)[b+1],dP)){var
c=j(d,b)[b+1],k=0===c[0]?c[1]:c[1],e=k?0===b?dJ:dM:0===b?dN:dO;if(0===c[0])var
l=c[5],m=c[4],n=c[3],o=c[2],g=as(v(dK),e,o,n,m,l);else
var
g=i(v(dL),e);s(bA(a),dQ,g)}var
q=b+1|0;if(f!==b){var
b=q;continue}break}}return 0}return i(bA(a),dR)}function
bI(a){aR[1]=[0,a,aR[1]];return 0}32===aP;function
bJ(a){var
b=[];f3(b,[0,b,b]);return b}var
aU=[0,dS],J=[0,0];function
aV(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=aV(d);if(b!==d)a[1]=[3,b];return b}return a}function
$(a){return aV(a)}var
bK=[0,function(a){bk(dT);bk(bC(a));cI(W,10);bH(W);bm(W);bl(0);return fZ(2)}];function
bL(a,b){try{var
c=i(a,b)}catch(f){f=aL(f);return i(bK[1],f)}return c}function
a0(a,b,c,d){var
f=c,e=d;for(;;)if(typeof
f==="number")return a<50?C(1+a,b,e):E(C,[0,b,e]);else
switch(f[0]){case
0:var
g=f[1][1];if(g){i(g[1],b);return a<50?C(1+a,b,e):E(C,[0,b,e])}else
return a<50?C(1+a,b,e):E(C,[0,b,e]);case
1:i(f[1],b);return a<50?C(1+a,b,e):E(C,[0,b,e]);default:var
h=[0,f[2],e],f=f[1],e=h;continue}}function
C(a,b,c){return c?a<50?a0(1+a,b,c[1],c[2]):E(a0,[0,b,c[1],c[2]]):0}function
dU(b,c,d){return aK(a0(0,b,c,d))}function
f8(b,c){return aK(C(0,b,c))}function
a1(a,b,c){var
e=b,d=c;for(;;)if(typeof
e==="number")return a<50?N(1+a,d):E(N,[0,d]);else
switch(e[0]){case
0:var
g=e[2];J[1]=e[1];bL(g,0);return a<50?N(1+a,d):E(N,[0,d]);case
1:var
f=e[1];if(f[4]){f[4]=0;f[1][2]=f[2];f[2][1]=f[1]}return a<50?N(1+a,d):E(N,[0,d]);default:var
h=[0,e[2],d],e=e[1],d=h;continue}}function
N(a,b){return b?a<50?a1(1+a,b[1],b[2]):E(a1,[0,b[1],b[2]]):0}function
dV(b,c){return aK(a1(0,b,c))}function
f9(b){return aK(N(0,b))}function
am(a,b){var
c=1===b[0]?b[1][1]===aU?(dV(a[4],0),1):0:0;return dU(b,a[2],0)}var
aW=[0,0],R=[0,0,0];function
bM(a,b){var
h=[0,b],i=aV(a),e=i[1];switch(e[0]){case
1:if(e[1][1]===aU)return 0;break;case
2:var
k=e[1];i[1]=h;var
g=J[1],j=aW[1]?1:(aW[1]=1,0);am(k,h);if(j){J[1]=g;return 0}for(;;){if(0===R[1]){aW[1]=0;J[1]=g;return 0}if(0===R[1])throw[0,c5];R[1]=R[1]-1|0;var
c=R[2],d=c[2];if(d===c)R[2]=0;else
c[2]=d[2];var
f=d[1];am(f[1],f[2]);continue}}return V(dW)}function
bN(a,b){return typeof
a==="number"?b:typeof
b==="number"?a:[2,a,b]}function
aX(a){if(typeof
a!=="number")switch(a[0]){case
0:if(!a[1][1])return 0;break;case
2:var
b=a[1],c=aX(a[2]);return bN(aX(b),c)}return a}function
dX(a,b){var
d=$(a),g=$(b),j=d[1];if(2===j[0]){var
c=j[1];if(d===g)return 0;var
e=g[1];if(2===e[0]){var
f=e[1];g[1]=[3,d];c[1]=f[1];var
k=bN(c[2],f[2]),l=c[3]+f[3]|0;if(42<l){c[3]=0;c[2]=aX(k)}else{c[3]=l;c[2]=k}var
h=f[4],i=c[4],m=typeof
i==="number"?h:typeof
h==="number"?i:[2,i,h];c[4]=m;return 0}d[1]=e;return am(c,e)}throw[0,u,dY]}function
dZ(a,b){var
c=$(a),d=c[1];if(2===d[0]){var
e=d[1];c[1]=b;return am(e,b)}throw[0,u,d0]}function
d1(a){return[0,[1,a]]}function
d2(a,b){var
g=$(a),c=g[1];switch(c[0]){case
0:return i(b,c[1]);case
1:return[0,c];case
2:var
h=c[1],d=[0,[2,[0,[0,[0,g]],0,0,0]]],k=J[1],f=[1,function(a){switch(a[0]){case
0:var
e=a[1];J[1]=k;try{var
f=i(b,e),c=f}catch(f){f=aL(f);var
c=d1(f)}return dX(d,c);case
1:return dZ(d,a);default:throw[0,u,d3]}}],e=h[2],j=typeof
e==="number"?f:[2,f,e];h[2]=j;return d;default:throw[0,u,d4]}}var
d5=[0,function(a){return 0}],x=bJ(0),d6=[0,0],K=b,aa=null;function
d7(a){var
e=1-(x[2]===x?1:0);if(e){var
b=bJ(0);b[1][2]=x[2];x[2][1]=b[1];b[1]=x[1];x[1][2]=b;x[1]=x;x[2]=x;d6[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])bM(c[3],0);var
c=c[2];continue}return d}}return e}var
d8=undefined;function
bO(a,b){return a==aa?0:i(b,a)}function
bP(a,b,c){return a==aa?i(b,0):i(c,a)}function
an(a,b){return a==aa?i(b,0):a}var
ab=true,ao=false,bQ=K.Array,bR=[0,d9];fT(c(cc),[0,bR,{}][0+1]);bI(function(a){return a[1]===bR?[0,D(a[2].toString())]:0});bI(function(a){return a
instanceof
bQ?0:[0,D(a.toString())]});function
S(a){return a}function
L(a,b){a.appendChild(b);return 0}function
ap(d){return S(bc(function(a){if(1-(S(a)==aa?1:0)){var
e=i(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=i(d,c);if(!(b|0))c.returnValue=b;return b}))}var
B=K.document;function
aq(a,b){return a?i(b,a[1]):0}function
aY(a,b){return a.createElement(b.toString())}function
bS(a,b){return aY(a,b)}var
bT=[0,cl];function
bU(a,b,c,d){for(;;){if(0===a)if(0===b)return aY(c,d);var
h=bT[1];if(cl===h){try{var
j=B.createElement('<input name="x">'),k=j.tagName.toLowerCase()===b1?1:0,m=k?j.name==="x"?1:0:k,i=m}catch(f){var
i=0}var
l=i?b$:-1003883683;bT[1]=l;continue}if(b$<=h){var
f=new
bQ();f.push("<",d.toString());aq(a,function(a){f.push(' type="',cF(a),ax);return 0});aq(b,function(a){f.push(' name="',cF(a),ax);return 0});f.push(">");return c.createElement(f.join(e))}var
g=aY(c,d);aq(a,function(a){return g.type=a});aq(b,function(a){return g.name=a});return g}}function
bV(a,b,c){return bU(a,b,c,d$)}function
aZ(a){return bS(a,ea)}K.HTMLElement===d8;var
ec=fL(0),ed=a2;function
ee(a){var
c=[0,[2,[0,1,0,0,0]]],g=[0,0];function
h(a,b){var
d=a2<a?[0,ed,a-a2]:[0,a,0],e=d[2],f=d[1],i=e==0?function(a){return bM(c,a)}:function(a){return h(e,a)};g[1]=[0,K.setTimeout(bc(i),f*cm)];return 0}h(a,0);function
i(a){var
b=g[1];return b?K.clearTimeout(b[1]):0}var
b=$(c)[1];switch(b[0]){case
1:var
j=b[1][1]===aU?(bL(i,0),1):0;break;case
2:var
d=b[1],e=[0,J[1],i],f=d[4],k=typeof
f==="number"?e:[2,e,f];d[4]=k;var
j=1;break;default:var
j=0}return c}d5[1]=function(a){return 1===a?(K.setTimeout(bc(d7),0),0):0};function
bW(a){return ec.log(a.toString())}bK[1]=function(a){bW(ef);bW(bC(a));return bH(W)};function
ar(a,b){return i(b,a)}var
bX=[0,eg];function
eh(c){var
d=h(c);function
a(a){var
b=a;for(;;){if(d<=b)return 0;if(92===w(c,b))if(b<(d-1|0))if(92===w(c,b+1|0)){var
b=b+2|0;continue}if(10===w(c,b)){var
b=b+1|0;continue}throw[0,bX,1]}}try{a(0);var
b=0}catch(f){f=aL(f);if(f[1]===bX)return f[2];throw f}return b}function
M(a,b){var
c=aj(10);function
e(a,b){var
d=a?a[1]:ei;return eh(b)?q(c,k(d,k(b,d))):0}var
f=b.childNodes,h=f.length-1|0,i=0;if(!(h<0)){var
d=i;for(;;){var
j=function(b){var
a=D(b.nodeName);if(g(a,ej)){if(g(a,ek)){if(g(a,el)){if(g(a,em)){if(g(a,en)){if(g(a,eo))if(g(a,ep))if(g(a,eq))return g(a,er)?g(a,es)?g(a,et)?q(c,k(ev,k(a,eu))):e(0,k(M(0,b),ew)):e(ex,M(0,b)):q(c,ey);var
i=X((w(a,1)-48|0)+1|0,61);return q(c,k(i,k(M(0,b),ez)))}return q(c,M(0,b))}return q(c,eA)}return e(eB,M(0,b))}var
j=S(b),f=an(j,function(a){throw[0,u,eC]}),l=function(a){function
h(a){return D(a)}function
i(a){throw[0,u,eD]}var
d=ar(an(f.getAttribute("href"),i),h),e=D(a);if(g(e,eE)){if(g(e,eF))return q(c,eG);var
j=function(a){return q(c,a)};return ar(ai(eJ,[0,eI,[0,d,eH]]),j)}return q(c,ai(eN,[0,eM,[0,d,[0,eL,[0,M(0,b),eK]]]]))},m=function(a){return q(c,eO)};return bP(f.getAttribute("wysitype"),m,l)}var
n=b.nodeValue;function
h(a){return[0,a]}var
d=bP(n,function(a){return 0},h);return d?q(c,D(d[1])):0};bO(f.item(d),j);var
l=d+1|0;if(h!==d){var
d=l;continue}break}}return ak(c)}K.onload=ap(function(a){function
d(a){throw[0,u,eP]}var
f=an(B.getElementById("wiki_demo"),d),b=bS(B,eb);b.style.border="2px green solid";b.src="#";b.id="wysiFrame";L(f,b);function
e(e){e.open();e.write("<html><body><p><b>Camelus</b><i>bactrianus</i></p></body></html>");e.close();e.designMode="On";var
i=b.contentWindow;L(f,aZ(B));function
a(a,b,c,d){var
j=a?a[1]:ao,h=b?b[1]:0,g=bU([0,"submit"],0,B,d_);g.value=c.toString();g.onclick=ap(function(a){i.focus();var
b=h?S(h[1].toString()):aa;e.execCommand(d.toString(),j,b);return ab});L(f,g);return g}a(0,0,eR,eQ);a(0,0,eT,eS);a(0,0,eV,eU);a(0,0,eX,eW);L(f,aZ(B));a(0,e0,eZ,eY);a(0,e3,e2,e1);a(0,e6,e5,e4);a(0,e9,e8,e7);function
j(a,b){function
c(a){return D(a)}function
d(a){return b.toString()}return ar(an(i.prompt(a.toString(),b.toString()),d),c)}var
l=ap(function(a){var
c=j(e$,e_),b=ai(ff,[0,fe,[0,c,[0,fd,[0,j(fb,fa),fc]]]]);i.alert(b.toString());e.execCommand(aB,ao,S(b.toString()));return ab});a(0,0,fh,fg).onclick=l;var
m=ap(function(a){var
b=j(fj,fi),c=ar([0,fn,[0,b,[0,fm,[0,b,fl]]]],function(a){return ai(fk,a)});i.alert(c.toString());e.execCommand(aB,ao,S(c.toString()));return ab});a(0,0,fp,fo).onclick=m;L(f,aZ(B));var
d=bV(0,0,B);d.readOnly=ab;d[c(bZ)]=34;d[c(b6)]=10;d.style.border="1px black solid";d.style.padding=bY;L(f,d);var
h=bV(0,0,B);h.id="wikiFrame";h.readOnly=ab;h[c(bZ)]=34;h[c(b6)]=10;d.style.border="2px blue solid";d.style.padding=bY;L(f,h);function
k(a,b){var
c=D(e.body.innerHTML);if(g(c,a)){try{d.value=c.toString();h.value=M(0,e.body).toString()}catch(f){}var
f=20}else
var
f=cP(0,b-1|0);function
i(a){return k(c,f)}var
j=0===f?0.5:0.1;return d2(ee(j),i)}k(fq,0);return 0}bO(b.contentDocument,e);return ao});bl(0);return}(function(){return this}()));
