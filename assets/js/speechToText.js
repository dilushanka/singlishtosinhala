var mPrevChar=0;var m2ndPrevChar=0;var m3ndPrevChar=0;var state;var type;var defprev=false;function changeState(){focusToUnicode();var keyboard=document.getElementById('keyboard').value;if(keyboard=='english')
{document.getElementById('state').value='disable';}
else if(keyboard=='phonetic')
{document.getElementById('state').value='enable';document.cookie="keyboard=phonetic";}
else if(keyboard=='wijesekara')
{document.getElementById('state').value='enable';document.cookie="keyboard=wijesekara";}}
var SWARA_EXCEPT_AYANNA=[3463,3465,3467,3469,3471,3473,3476];var VYANJANA_LIST=[3482,3483,3484,3485,3487,3488,3489,3490,3491,3492,3493,3494,3495,3496,3497,3498,3499,3500,3501,3502,3503,3504,3505,3507,3508,3509,3510,3511,3512,3513,3514,3515,3517,3520,3521,3522,3523,3524,3525,3526];var PILI_EXCEPT_ALAPILLA=[3536,3538,3540,3544,3551,3545,3548];var SWARA_PILI=[3536,3538,3540,3544,3545,3548,3551];var VYANJANA_H_LIST=[3495,3500,3501,3496,3497,3503,3523,3522,3488,3482,3510,3484,3508,3687,3688];var VYANJANA_SANYAKA_LIST=[3497,3503,3484,3490,3505,3524,3482];var SWARA_DIRGA_SWARA_MAP=[];SWARA_DIRGA_SWARA_MAP[3463]=3464;SWARA_DIRGA_SWARA_MAP[3465]=3466;SWARA_DIRGA_SWARA_MAP[3467]=3468;SWARA_DIRGA_SWARA_MAP[3469]=3470;SWARA_DIRGA_SWARA_MAP[3471]=3472;SWARA_DIRGA_SWARA_MAP[3473]=3474;SWARA_DIRGA_SWARA_MAP[3476]=3477;var SHIFTED_KEYS=[];SHIFTED_KEYS[3461]=3463;SHIFTED_KEYS[3473]=3475;SHIFTED_KEYS[3505]=3499;SHIFTED_KEYS[3517]=3525;SHIFTED_KEYS[3484]=3485;SHIFTED_KEYS[3495]=3496;SHIFTED_KEYS[3497]=3498;SHIFTED_KEYS[3508]=3509;SHIFTED_KEYS[3510]=3513;SHIFTED_KEYS[3523]=3522;SHIFTED_KEYS[3488]=3489;SHIFTED_KEYS[3465]=3466;SHIFTED_KEYS[3458]=3486;SHIFTED_KEYS[3524]=3459;SHIFTED_KEYS[3490]=3491;SHIFTED_KEYS[3515]=3469;var SWARA_PILI_MAP=[];SWARA_PILI_MAP[3463]=3536;SWARA_PILI_MAP[3465]=3538;SWARA_PILI_MAP[3467]=3540;SWARA_PILI_MAP[3469]=3544;SWARA_PILI_MAP[3471]=3551;SWARA_PILI_MAP[3473]=3545;SWARA_PILI_MAP[3476]=3548;var SWARA_DIRGA_PILI_MAP=[];SWARA_DIRGA_PILI_MAP[3463]=3537;SWARA_DIRGA_PILI_MAP[3465]=3539;SWARA_DIRGA_PILI_MAP[3467]=3542;SWARA_DIRGA_PILI_MAP[3469]=3560;SWARA_DIRGA_PILI_MAP[3471]=3561;SWARA_DIRGA_PILI_MAP[3473]=3546;SWARA_DIRGA_PILI_MAP[3476]=3549;var VYANJANA_H_MAP=[];VYANJANA_H_MAP[3495]=3501;VYANJANA_H_MAP[3501]=3502;VYANJANA_H_MAP[3496]=3502;VYANJANA_H_MAP[3497]=3503;VYANJANA_H_MAP[3503]=3504;VYANJANA_H_MAP[3523]=3521;VYANJANA_H_MAP[3522]=3522;VYANJANA_H_MAP[3488]=3489;VYANJANA_H_MAP[3482]=3483;VYANJANA_H_MAP[3510]=3511;VYANJANA_H_MAP[3484]=3485;VYANJANA_H_MAP[3508]=3509;VYANJANA_H_MAP[3500]=3507;VYANJANA_H_MAP[3687]=3488;VYANJANA_H_MAP[3688]=3489;var VYANJANA_SANYAKA_MAP=[];VYANJANA_SANYAKA_MAP[3497]=3500;VYANJANA_SANYAKA_MAP[3503]=3507;VYANJANA_SANYAKA_MAP[3484]=3487;VYANJANA_SANYAKA_MAP[3490]=3494;VYANJANA_SANYAKA_MAP[3505]=3458;VYANJANA_SANYAKA_MAP[3524]=3493;VYANJANA_SANYAKA_MAP[3482]=3492;var ENGLISH_TO_SINHALA=[];ENGLISH_TO_SINHALA["q"]=3503;ENGLISH_TO_SINHALA["w"]=3520;ENGLISH_TO_SINHALA["e"]=3473;ENGLISH_TO_SINHALA["r"]=3515;ENGLISH_TO_SINHALA["t"]=3495;ENGLISH_TO_SINHALA["y"]=3514;ENGLISH_TO_SINHALA["u"]=3467;ENGLISH_TO_SINHALA["i"]=3465;ENGLISH_TO_SINHALA["o"]=3476;ENGLISH_TO_SINHALA["p"]=3508;ENGLISH_TO_SINHALA["a"]=3461;ENGLISH_TO_SINHALA["s"]=3523;ENGLISH_TO_SINHALA["d"]=3497;ENGLISH_TO_SINHALA["f"]=3526;ENGLISH_TO_SINHALA["g"]=3484;ENGLISH_TO_SINHALA["h"]=3524;ENGLISH_TO_SINHALA["j"]=3490;ENGLISH_TO_SINHALA["k"]=3482;ENGLISH_TO_SINHALA["l"]=3517;ENGLISH_TO_SINHALA["z"]=3962;ENGLISH_TO_SINHALA["x"]=3458;ENGLISH_TO_SINHALA["c"]=3687;ENGLISH_TO_SINHALA["v"]=3520;ENGLISH_TO_SINHALA["b"]=3510;ENGLISH_TO_SINHALA["n"]=3505;ENGLISH_TO_SINHALA["m"]=3512;ENGLISH_TO_SINHALA["Q"]=3503;ENGLISH_TO_SINHALA["W"]=3520;ENGLISH_TO_SINHALA["E"]=3475;ENGLISH_TO_SINHALA["R"]=3469;ENGLISH_TO_SINHALA["T"]=3496;ENGLISH_TO_SINHALA["Y"]=3514;ENGLISH_TO_SINHALA["U"]=3467;ENGLISH_TO_SINHALA["I"]=3466;ENGLISH_TO_SINHALA["O"]=3476;ENGLISH_TO_SINHALA["P"]=3509;ENGLISH_TO_SINHALA["A"]=3463;ENGLISH_TO_SINHALA["S"]=3522;ENGLISH_TO_SINHALA["D"]=3498;ENGLISH_TO_SINHALA["F"]=3526;ENGLISH_TO_SINHALA["G"]=3485;ENGLISH_TO_SINHALA["H"]=3459;ENGLISH_TO_SINHALA["J"]=3491;ENGLISH_TO_SINHALA["K"]=3482;ENGLISH_TO_SINHALA["L"]=3525;ENGLISH_TO_SINHALA["Z"]=3962;ENGLISH_TO_SINHALA["X"]=3486;ENGLISH_TO_SINHALA["C"]=3687;ENGLISH_TO_SINHALA["V"]=3520;ENGLISH_TO_SINHALA["B"]=3513;ENGLISH_TO_SINHALA["N"]=3499;ENGLISH_TO_SINHALA["M"]=3512;var ENGLISH_TO_SINHALA_WIJESEKARA=[];ENGLISH_TO_SINHALA_WIJESEKARA["q"]=3540;ENGLISH_TO_SINHALA_WIJESEKARA["w"]=3461;ENGLISH_TO_SINHALA_WIJESEKARA["e"]=3536;ENGLISH_TO_SINHALA_WIJESEKARA["r"]=3515;ENGLISH_TO_SINHALA_WIJESEKARA["t"]=3473;ENGLISH_TO_SINHALA_WIJESEKARA["y"]=3524;ENGLISH_TO_SINHALA_WIJESEKARA["u"]=3512;ENGLISH_TO_SINHALA_WIJESEKARA["i"]=3523;ENGLISH_TO_SINHALA_WIJESEKARA["o"]=3503;ENGLISH_TO_SINHALA_WIJESEKARA["p"]=3488;ENGLISH_TO_SINHALA_WIJESEKARA["["]=3492;ENGLISH_TO_SINHALA_WIJESEKARA["]"]=59;ENGLISH_TO_SINHALA_WIJESEKARA["\\"]=8205;ENGLISH_TO_SINHALA_WIJESEKARA["a"]=3530;ENGLISH_TO_SINHALA_WIJESEKARA["s"]=3538;ENGLISH_TO_SINHALA_WIJESEKARA["d"]=3535;ENGLISH_TO_SINHALA_WIJESEKARA["f"]=3545;ENGLISH_TO_SINHALA_WIJESEKARA["g"]=3495;ENGLISH_TO_SINHALA_WIJESEKARA["h"]=3514;ENGLISH_TO_SINHALA_WIJESEKARA["j"]=3520;ENGLISH_TO_SINHALA_WIJESEKARA["k"]=3505;ENGLISH_TO_SINHALA_WIJESEKARA["l"]=3482;ENGLISH_TO_SINHALA_WIJESEKARA[";"]=3501;ENGLISH_TO_SINHALA_WIJESEKARA["'"]=46;ENGLISH_TO_SINHALA_WIJESEKARA["z"]=39;ENGLISH_TO_SINHALA_WIJESEKARA["x"]=3458;ENGLISH_TO_SINHALA_WIJESEKARA["c"]=3490;ENGLISH_TO_SINHALA_WIJESEKARA["v"]=3497;ENGLISH_TO_SINHALA_WIJESEKARA["b"]=3465;ENGLISH_TO_SINHALA_WIJESEKARA["n"]=3510;ENGLISH_TO_SINHALA_WIJESEKARA["m"]=3508;ENGLISH_TO_SINHALA_WIJESEKARA[","]=3517;ENGLISH_TO_SINHALA_WIJESEKARA["."]=3484;ENGLISH_TO_SINHALA_WIJESEKARA["/"]=47;ENGLISH_TO_SINHALA_WIJESEKARA["`"]=3696;ENGLISH_TO_SINHALA_WIJESEKARA["Q"]=3542;ENGLISH_TO_SINHALA_WIJESEKARA["W"]=3467;ENGLISH_TO_SINHALA_WIJESEKARA["E"]=3537;ENGLISH_TO_SINHALA_WIJESEKARA["R"]=3469;ENGLISH_TO_SINHALA_WIJESEKARA["T"]=3476;ENGLISH_TO_SINHALA_WIJESEKARA["Y"]=3521;ENGLISH_TO_SINHALA_WIJESEKARA["U"]=3513;ENGLISH_TO_SINHALA_WIJESEKARA["I"]=3522;ENGLISH_TO_SINHALA_WIJESEKARA["O"]=3504;ENGLISH_TO_SINHALA_WIJESEKARA["P"]=3489;ENGLISH_TO_SINHALA_WIJESEKARA["{"]=3493;ENGLISH_TO_SINHALA_WIJESEKARA["}"]=58;ENGLISH_TO_SINHALA_WIJESEKARA["A"]=3551;ENGLISH_TO_SINHALA_WIJESEKARA["S"]=3539;ENGLISH_TO_SINHALA_WIJESEKARA["D"]=3544;ENGLISH_TO_SINHALA_WIJESEKARA["F"]=3526;ENGLISH_TO_SINHALA_WIJESEKARA["G"]=3496;ENGLISH_TO_SINHALA_WIJESEKARA["H"]=3694;ENGLISH_TO_SINHALA_WIJESEKARA["J"]=3695;ENGLISH_TO_SINHALA_WIJESEKARA["K"]=3499;ENGLISH_TO_SINHALA_WIJESEKARA["L"]=3483;ENGLISH_TO_SINHALA_WIJESEKARA[":"]=3502;ENGLISH_TO_SINHALA_WIJESEKARA["\""]=44;ENGLISH_TO_SINHALA_WIJESEKARA["Z"]=34;ENGLISH_TO_SINHALA_WIJESEKARA["X"]=3486;ENGLISH_TO_SINHALA_WIJESEKARA["C"]=3491;ENGLISH_TO_SINHALA_WIJESEKARA["V"]=3498;ENGLISH_TO_SINHALA_WIJESEKARA["B"]=3466;ENGLISH_TO_SINHALA_WIJESEKARA["N"]=3511;ENGLISH_TO_SINHALA_WIJESEKARA["M"]=3509;ENGLISH_TO_SINHALA_WIJESEKARA["<"]=3525;ENGLISH_TO_SINHALA_WIJESEKARA[">"]=3485;ENGLISH_TO_SINHALA_WIJESEKARA["?"]=63;ENGLISH_TO_SINHALA_WIJESEKARA["~"]=3697;ENGLISH_TO_SINHALA_WIJESEKARA["âˆš"]=3500;ENGLISH_TO_SINHALA_WIJESEKARA["Ã¸"]=3507;ENGLISH_TO_SINHALA_WIJESEKARA["â‰¥"]=3487;ENGLISH_TO_SINHALA_WIJESEKARA["Ã§"]=3494;ENGLISH_TO_SINHALA_WIJESEKARA["Â¥"]=3493;ENGLISH_TO_SINHALA_WIJESEKARA["Â¬"]=3492;ENGLISH_TO_SINHALA_WIJESEKARA["Ã¦"]=3572;function appendChar(newText)
{if(document.activeElement.tagName=="IFRAME")
{document.activeElement.contentWindow.document.execCommand('insertText',false,newText);}
else
{document.execCommand('insertText',false,newText);}}
function deleteBackward()
{if(document.activeElement.tagName=="IFRAME")
{if(defprev)
{console.log("Google Docs");}
else
{document.activeElement.contentWindow.document.execCommand("delete",false,null);}}
else
{document.execCommand("delete",false,null);}
if(mPrevChar)
{primaryCode=mPrevChar;}
if(m2ndPrevChar)
{mPrevChar=m2ndPrevChar;}
if(m3ndPrevChar)
{m2ndPrevChar=m3rdPrevChar;}
m3rdPrevChar=0;}
function deleteDefault()
{if(document.activeElement.tagName=="IFRAME")
{console.log("Test24");var res=document.activeElement.contentWindow.document.execCommand("delete",false,null);console.log("Test25 "+res);}
else
{document.execCommand("delete",false,null);}}
function showAlert(s)
{switch(s){case 'focus_unicode':title='Notice';subtitle='You cannot edit the text in Legacy font, please go to the Unicode tab to edit.';break;case 'info_denied':title='Warning';subtitle='Permission to use microphone was denied.';break;case 'info_blocked':title='Warning';subtitle='You have blocked microphone access on this page. Please allow microphone access in order to use Voice Typing.';break;case 'info_no_microphone':title='Warning';subtitle="No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.";break;case 'info_no_speech':title='Warning';subtitle="No speech was detected. You may need to adjust your <a href='//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892'> microphone settings</a>";break;case 'type_unicode_first':title='Alert';subtitle='Please type some text in Unicode in order to convert them to Legacy fonts.';break;}
show_alert(title,subtitle);}
var Unicode=new Array();var Legacy=new Array();Unicode[0]='à·à·Šâ€à¶»à·“';Legacy[0]='â€º';Unicode[1]='à¶¯à·Šâ€à¶»';Legacy[1]='Ã¸';Unicode[2]='à¶šà·Šâ€à·‚';Legacy[2]='Ã‹';Unicode[3]='à·…à·”';Legacy[3]='Â¿';Unicode[4]='à·…à·–';Legacy[4]='Â¿E';Unicode[5]='à¶¶à·Šâ€à¶»à·š';Legacy[5]='fÃ­%';Unicode[6]='à¶©à·Šâ€à¶»à·š';Legacy[6]='fÃ¢%';Unicode[7]='à¶°à·Šâ€à¶»à·š';Legacy[7]='fÃ¨%';Unicode[8]='à¶¹à·Šâ€à¶»à·š';Legacy[8]='fÃ²%';Unicode[9]='à¶›à·Šâ€à¶»à·š';Legacy[9]='fÃ„%';Unicode[10]='à¶ à·Šâ€à¶»à·š';Legacy[10]='fÃ‰%';Unicode[11]='à¶¸à·Šâ€à¶»à·š';Legacy[11]='fÃ¯%';Unicode[12]='à¶§à·Šâ€à¶»à·š';Legacy[12]='fÃœ%';Unicode[13]='à·€à·Šâ€à¶»à·š';Legacy[13]='fÃµ%';Unicode[14]='à¶¶à·Šâ€à¶»à·’';Legacy[14]='Ã¬%';Unicode[15]='à¶©à·Šâ€à¶»à·’';Legacy[15]='Ã¤%';Unicode[16]='à¶°à·Šâ€à¶»à·’';Legacy[16]='Ãª%';Unicode[17]='à¶¹à·Šâ€à¶»à·’';Legacy[17]='Ã´%';Unicode[18]='à¶›à·Šâ€à¶»à·’';Legacy[18]='Ã…%';Unicode[19]='à¶ à·Šâ€à¶»à·’';Legacy[19]='Ã‘%';Unicode[20]='à¶¸à·Šâ€à¶»à·’';Legacy[20]='Ã±%';Unicode[21]='à¶§à·Šâ€à¶»à·’';Legacy[21]='Ã¡%';Unicode[22]='à·€à·Šâ€à¶»à·’';Legacy[22]='Ãº%';Unicode[23]='à¶¶à·Šâ€à¶»à·“';Legacy[23]='Ã®%';Unicode[24]='à¶©à·Šâ€à¶»à·“';Legacy[24]='Ã£%';Unicode[25]='à¶°à·Šâ€à¶»à·“';Legacy[25]='Ã«%';Unicode[26]='à¶¹à·Šâ€à¶»à·“';Legacy[26]='Ã¶%';Unicode[27]='à¶›à·Šâ€à¶»à·“';Legacy[27]='Ã‡%';Unicode[28]='à¶ à·Šâ€à¶»à·“';Legacy[28]='Ã–%';Unicode[29]='à¶¸à·Šâ€à¶»à·“';Legacy[29]='Ã³%';Unicode[30]='à¶§à·Šâ€à¶»à·“';Legacy[30]='Ã %';Unicode[31]='à·€à·Šâ€à¶»à·“';Legacy[31]='Ã¹%';Unicode[32]='à¶¹à·š';Legacy[32]='fÃ²';Unicode[33]='à¶¡à·š';Legacy[33]='fÃ¾';Unicode[34]='à¶ªà·š';Legacy[34]='fVa';Unicode[35]='à¶›à·š';Legacy[35]='fÃ„';Unicode[36]='à¶¬à·š';Legacy[36]='fÃ¥';Unicode[37]='à¶¶à·š';Legacy[37]='fÃ­';Unicode[38]='à¶ à·š';Legacy[38]='fÃ‰';Unicode[39]='à¶©à·š';Legacy[39]='fÃ¢';Unicode[40]='à¶¸à·š';Legacy[40]='fÃ¯';Unicode[41]='à¶¢à·š';Legacy[41]='fÃŠ';Unicode[42]='à¶§à·š';Legacy[42]='fÃœ';Unicode[43]='à·€à·š';Legacy[43]='fÃµ';Unicode[44]='à¶°à·š';Legacy[44]='fÃ¨';Unicode[45]='à¶»à·Šâ€(.)';Legacy[45]='$1â€“';Unicode[46]='(.)à·Šâ€à¶»à·';Legacy[46]='f$1%da';Unicode[47]='(.)à·Šâ€à¶»à·œ';Legacy[47]='f$1%d';Unicode[48]='(.)à·Šâ€à¶»à·š';Legacy[48]='f$1%a';Unicode[49]='(.)à·Šâ€à¶»à·ž';Legacy[49]='f$1%!';Unicode[50]='(.)à·Šâ€à¶»à·™';Legacy[50]='f$1%';Unicode[51]='(.)à·Šâ€à¶»à·›';Legacy[51]='ff$1%';Unicode[52]='(.)à·Šâ€à¶ºà·';Legacy[52]='f$1Hda';Unicode[53]='(.)à·Šâ€à¶ºà·œ';Legacy[53]='f$1Hd';Unicode[54]='(.)à·Šâ€à¶ºà·™';Legacy[54]='f$1H';Unicode[55]='(.)à·Šâ€à¶º';Legacy[55]='$1H';Unicode[56]='(.)à·›';Legacy[56]='ff$1';Unicode[57]='(.)à·ž';Legacy[57]='f$1!';Unicode[58]='(.)à·';Legacy[58]='f$1da';Unicode[59]='(.)à·œ';Legacy[59]='f$1d';Unicode[60]='(.)à·š';Legacy[60]='f$1a';Unicode[61]='(.)à·™';Legacy[61]='f$1';Unicode[62]='à·Šâ€à¶»';Legacy[62]='%';Unicode[63]='â€fà¶»a';Legacy[63]='fÂ¾';Unicode[64]='à¶­à·”';Legacy[64]=';=';Unicode[65]='à¶œà·”';Legacy[65]='.=';Unicode[66]='à·à·”';Legacy[66]='Y=';Unicode[67]='à¶šà·”';Legacy[67]='l=';Unicode[68]='à¶·à·”';Legacy[68]='N=';Unicode[69]='à¶Ÿà·”';Legacy[69]='Ã•=';Unicode[70]='à¶­à·–';Legacy[70]=';+';Unicode[71]='à¶œà·–';Legacy[71]='.+';Unicode[72]='à·à·–';Legacy[72]='Y+';Unicode[73]='à¶šà·–';Legacy[73]='l+';Unicode[74]='à¶·à·–';Legacy[74]='N+';Unicode[75]='à¶Ÿà·–';Legacy[75]='Ã•+';Unicode[76]='à¶»à·”';Legacy[76]='re';Unicode[77]='à¶»à·–';Legacy[77]='rE';Unicode[78]='à¶³à·’';Legacy[78]='Â¢';Unicode[79]='à¶³à·“';Legacy[79]='Â£';Unicode[80]='à¶¯à·–';Legacy[80]='Â¥';Unicode[81]='à¶¯à·“';Legacy[81]='Â§';Unicode[82]='à¶½à·–';Legacy[82]='Ã†';Unicode[83]='à¶³à·–';Legacy[83]='Âª';Unicode[84]='à¶¨à·’';Legacy[84]='Ã€';Unicode[85]='à¶¨à·“';Legacy[85]='Ã';Unicode[86]='à¶›à·Š';Legacy[86]='Ã„';Unicode[87]='à¶›à·’';Legacy[87]='Ã…';Unicode[88]='à¶½à·”';Legacy[88]='Â¨';Unicode[89]='à¶›à·“';Legacy[89]='Ã‡';Unicode[90]='à¶¯à·’';Legacy[90]='Ãˆ';Unicode[91]='à¶ à·Š';Legacy[91]='Ã‰';Unicode[92]='à¶»à·Š';Legacy[92]='Â¾';Unicode[93]='à¶»à·“';Legacy[93]='Ã';Unicode[94]='à¶ªà·’';Legacy[94]='ÃŽ';Unicode[95]='à¶ªà·“';Legacy[95]='Ã';Unicode[96]='à¶ à·’';Legacy[96]='Ã‘';Unicode[97]='à¶®à·’';Legacy[97]='Ã“';Unicode[98]='à¶®à·“';Legacy[98]='Ã’';Unicode[99]='à¶¢à·“';Legacy[99]='Ã”';Unicode[100]='à¶ à·“';Legacy[100]='Ã–';Unicode[101]='à¶žà·Š';Legacy[101]='Ã™';Unicode[102]='à¶µà·“';Legacy[102]='Ãš';Unicode[103]='à¶§à·Š';Legacy[103]='Ãœ';Unicode[104]='à¶µà·’';Legacy[104]='Ã';Unicode[105]='à¶»à·’';Legacy[105]='ÃŸ';Unicode[106]='à¶§à·“';Legacy[106]='Ã ';Unicode[107]='à¶§à·’';Legacy[107]='Ã¡';Unicode[108]='à¶©à·Š';Legacy[108]='Ã¢';Unicode[109]='à¶©à·“';Legacy[109]='Ã£';Unicode[110]='à¶©à·’';Legacy[110]='Ã¤';Unicode[111]='à¶¬à·Š';Legacy[111]='Ã¥';Unicode[112]='à¶¬à·’';Legacy[112]='Ã§';Unicode[113]='à¶°à·Š';Legacy[113]='Ã¨';Unicode[114]='à¶¬à·“';Legacy[114]='Ã©';Unicode[115]='à¶°à·’';Legacy[115]='Ãª';Unicode[116]='à¶°à·“';Legacy[116]='Ã«';Unicode[117]='à¶¶à·’';Legacy[117]='Ã¬';Unicode[118]='à¶¶à·Š';Legacy[118]='Ã­';Unicode[119]='à¶¶à·“';Legacy[119]='Ã®';Unicode[120]='à¶¸à·Š';Legacy[120]='Ã¯';Unicode[121]='à¶¢à·’';Legacy[121]='Ã°';Unicode[122]='à¶¸à·’';Legacy[122]='Ã±';Unicode[123]='à¶¹à·Š';Legacy[123]='Ã²';Unicode[124]='à¶¸à·“';Legacy[124]='Ã³';Unicode[125]='à¶¹à·’';Legacy[125]='Ã´';Unicode[126]='à·€à·Š';Legacy[126]='Ãµ';Unicode[127]='à¶¹à·“';Legacy[127]='Ã¶';Unicode[128]='à¶³à·”';Legacy[128]='Ã·';Unicode[129]='à·€à·“';Legacy[129]='Ã¹';Unicode[130]='à·€à·’';Legacy[130]='Ãº';Unicode[131]='à¶žà·Š';Legacy[131]='Ã™';Unicode[132]='à¶¡à·’';Legacy[132]='Ã½';Unicode[133]='à¶¡à·Š';Legacy[133]='Ã¾';Unicode[134]='à¶¯à·”';Legacy[134]='Ã¿';Unicode[135]='à¶¢à·Š';Legacy[135]='ÃŠ';Unicode[136]='à¶«à·’';Legacy[136]='â€š';Unicode[137]='à¶«à·“';Legacy[137]='Å’';Unicode[138]='à¶¢à·“';Legacy[138]='Ã”';Unicode[139]='à¶¡à·“';Legacy[139]='Ã‚';Unicode[140]='à¶©à·’';Legacy[140]='Ã¤';Unicode[141]='à¶¤à·”';Legacy[141]='Ã»';Unicode[142]='à¶»à·';Legacy[142]='index.html';Unicode[143]='à¶»à·‘';Legacy[143]='?';Unicode[144]='à¶‚';Legacy[144]='x';Unicode[145]='à¶ƒ';Legacy[145]='#';Unicode[146]='à¶…';Legacy[146]='w';Unicode[147]='à¶†';Legacy[147]='wd';Unicode[148]='à¶‡';Legacy[148]='we';Unicode[149]='à¶ˆ';Legacy[149]='wE';Unicode[150]='à¶‰';Legacy[150]='b';Unicode[151]='à¶Š';Legacy[151]='B';Unicode[152]='à¶‹';Legacy[152]='W';Unicode[153]='à¶Œ';Legacy[153]='W!';Unicode[154]='à¶';Legacy[154]='R';Unicode[155]='à¶Ž';Legacy[155]='RD';Unicode[156]='à¶';Legacy[156]='ÃŒ';Unicode[157]='à¶';Legacy[157]='Ã';Unicode[158]='à¶‘';Legacy[158]='t';Unicode[159]='à¶’';Legacy[159]='tA';Unicode[160]='à¶“';Legacy[160]='ft';Unicode[161]='à¶”';Legacy[161]='T';Unicode[162]='à¶•';Legacy[162]='Â´';Unicode[163]='à¶–';Legacy[163]='T!';Unicode[164]='à¶š';Legacy[164]='l';Unicode[165]='à¶›';Legacy[165]='L';Unicode[166]='à¶œ';Legacy[166]='.';Unicode[167]='à¶';Legacy[167]='>';Unicode[168]='à¶ž';Legacy[168]='Ã™';Unicode[169]='à¶Ÿ';Legacy[169]='Ã•';Unicode[170]='à¶ ';Legacy[170]='p';Unicode[171]='à¶¡';Legacy[171]='P';Unicode[172]='à¶¢';Legacy[172]='c';Unicode[173]='à¶£';Legacy[173]='Â®';Unicode[174]='à¶¤';Legacy[174]='[';Unicode[175]='à¶¥';Legacy[175]='{';Unicode[176]='à¶¦';Legacy[176]='`c';Unicode[177]='à¶§';Legacy[177]='g';Unicode[178]='à¶¨';Legacy[178]='G';Unicode[179]='à¶©';Legacy[179]='v';Unicode[180]='à¶ª';Legacy[180]='V';Unicode[181]='à¶«';Legacy[181]='K';Unicode[182]='à¶¬';Legacy[182]='~';Unicode[183]='à¶­';Legacy[183]=';';Unicode[184]='à¶®';Legacy[184]=':';Unicode[185]='à¶¯';Legacy[185]='o';Unicode[186]='à¶°';Legacy[186]='O';Unicode[187]='à¶±';Legacy[187]='k';Unicode[188]='à¶³';Legacy[188]='|';Unicode[189]='à¶´';Legacy[189]='m';Unicode[190]='à¶µ';Legacy[190]='M';Unicode[191]='à¶¶';Legacy[191]='n';Unicode[192]='à¶·';Legacy[192]='N';Unicode[193]='à¶¸';Legacy[193]='u';Unicode[194]='à¶¹';Legacy[194]='U';Unicode[195]='à¶º';Legacy[195]='h';Unicode[196]='à¶»';Legacy[196]='r';Unicode[197]='à¶½';Legacy[197]=',';Unicode[198]='à·€';Legacy[198]='j';Unicode[199]='à·';Legacy[199]='Y';Unicode[200]='à·‚';Legacy[200]='I';Unicode[201]='à·ƒ';Legacy[201]='i';Unicode[202]='à·„';Legacy[202]='y';Unicode[203]='à·…';Legacy[203]='<';Unicode[204]='à·†';Legacy[204]='*';Unicode[205]='à·';Legacy[205]='d';Unicode[206]='à·';Legacy[206]='e';Unicode[207]='à·‘';Legacy[207]='E';Unicode[208]='à·’';Legacy[208]='s';Unicode[209]='à·“';Legacy[209]='S';Unicode[210]='à·”';Legacy[210]='q';Unicode[211]='à·–';Legacy[211]='Q';Unicode[212]='à·˜';Legacy[212]='D';Unicode[213]='à·Ÿ';Legacy[213]='!';Unicode[214]='à·²';Legacy[214]='DD';Unicode[215]='à·³';Legacy[215]='!';Unicode[216]='à·´';Legacy[216]='\'\'\'';Unicode[217]='à·Š';Legacy[217]='a';Unicode[218]='â€”';Legacy[218]='-';Unicode[219]='â€˜';Legacy[219]='z';Unicode[220]='â€™';Legacy[220]='Z';Unicode[221]='â€œ';Legacy[221]='â€”';Unicode[222]='â€';Legacy[222]='Ëœ';Unicode[223]='â€';Legacy[223]='';function convertLegacy()
{if(recognizing)
{recognizing=false;recognition.stop();}
text=document.getElementById('results').value;text=filterEnglish(text);text=text.replace(/,/g,"ï¿¦");text=text.replace(/\./g,"ï¿½");text=text.replace(/\(/g,"ï¿«");text=text.replace(/\)/g,"ï¿©");text=text.replace(/\"/g,"ï¿”");text=text.replace(/\?/g,"ï¿“");text=text.replace(/!/g,"ï¿’");text=text.replace(/\=/g,"ï¿");text=text.replace(/\'/g,"ï¿Ž");text=text.replace(/\+/g,"ï¿");text=text.replace(/\:/g,"ï¿Œ");text=text.replace(/\Ã·/g,"ï¿Š");text=text.replace(/\;/g,"ï¾¶");text=text.replace(/%/g,"ï¿•");text=text.replace(/\//g,"$");for(var k=0;k<223;k++)
{var unicode=new RegExp(Unicode[k],"g");text=text.replace(unicode,Legacy[k]);}
text=text.replace(/ï¿¦/g,"\"");text=text.replace(/ï¿½/g,"'");text=text.replace(/ï¿«/g,"^");text=text.replace(/ï¿©/g,"&");text=text.replace(/ï¿”/g,"â€”");text=text.replace(/ï¿“/g,"@");text=text.replace(/ï¿’/g,"Ã¦");text=text.replace(/ï¿/g,"}");text=text.replace(/ï¿Ž/g,"z");text=text.replace(/\ï¿/g,"Â¬");text=text.replace(/\ï¿Œ/g,"(");text=text.replace(/\ï¿Š/g,"âˆ’");text=text.replace(/\ï¾¶/g,"Â¦");text=text.replace(/ï¿•/g,"]");document.getElementById('results_legacy').value=text;return text;}
function filterEnglish(text)
{document.getElementById('contain_english').style.display='none';var textSplit=text.split(" ");var filter=[',','.','/',"'"];for(var i=0;i<textSplit.length;i++)
{var word=textSplit[i];if(!word.match(/[\u0D80-\u0DFF]+/g))
{if(word.length!=0&&filter.indexOf(word)=='-1')
{text=text.replace(word,"("+word+")");document.getElementById('contain_english').style.display='block';}}}
text=text.replace(") ("," ");return text;}
var audioContext=null;var meter=null;var canvasContext=null;var WIDTH=140;var HEIGHT=140;var rafID=null;var angle=0;var streams;function startAudioContext()
{canvasContext=document.getElementById("meter").getContext("2d");window.AudioContext=window.AudioContext||window.webkitAudioContext;if(audioContext==null)
{audioContext=new AudioContext();}
try
{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;navigator.getUserMedia({"audio":true,"video":false},gotStream,didntGetStream);}
catch(e)
{}}
function didntGetStream()
{}
var mediaStreamSource=null;function gotStream(stream)
{streams=stream;mediaStreamSource=audioContext.createMediaStreamSource(stream);meter=createAudioMeter(audioContext);mediaStreamSource.connect(meter);drawLoop();}
var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;function drawLoop(time)
{canvasContext.clearRect(0,0,WIDTH,HEIGHT);canvasContext.fillStyle="#ffffff";canvasContext.fillRect(0,0,WIDTH,HEIGHT);canvasContext.fillStyle=base_color_site;canvasContext.globalAlpha=0.4;var radius=(meter.volume*WIDTH*1.4)/2+30;var factor1=1;var factor2=0.75;var minVal=10;var radius2=radius*factor1;var radius3=radius*factor2;if(radius<minVal)
{radius=minVal;}
if(radius2<minVal)
{radius2=minVal;}
if(radius3<minVal)
{radius3=minVal;}
canvasContext.beginPath();canvasContext.arc(75,75,radius,0,Math.PI*2,false);canvasContext.fill();canvasContext.closePath();canvasContext.beginPath();canvasContext.arc(75,75,radius2,0,Math.PI*2,false);canvasContext.fill();canvasContext.closePath();canvasContext.beginPath();canvasContext.arc(75,75,radius3,0,Math.PI*2,false);canvasContext.fill();canvasContext.closePath();angle+=Math.PI/32;setTimeout(function(){rafID=window.requestAnimationFrame(drawLoop);},20);}
function shutdownNode()
{streams.getAudioTracks()[0].stop();$('#dict_form').submit();}
function createAudioMeter(audioContext,clipLevel,averaging,clipLag)
{var processor=audioContext.createScriptProcessor(512);processor.onaudioprocess=volumeAudioProcess;processor.clipping=false;processor.lastClip=0;processor.volume=0;processor.clipLevel=clipLevel||0.98;processor.averaging=averaging||0.95;processor.clipLag=clipLag||750;processor.connect(audioContext.destination);processor.checkClipping=function(){if(!this.clipping)
{return false;}
if((this.lastClip+this.clipLag)<window.performance.now())
{this.clipping=false;}
return this.clipping;};processor.shutdown=function(){this.disconnect();this.onaudioprocess=null;};return processor;}
function volumeAudioProcess(event)
{var buf=event.inputBuffer.getChannelData(0);var bufLength=buf.length;var sum=0;var x;for(var i=0;i<bufLength;i++)
{x=buf[i];if(Math.abs(x)>=this.clipLevel)
{this.clipping=true;this.lastClip=window.performance.now();}
sum+=x*x;}
var rms=Math.sqrt(sum/bufLength);this.volume=Math.max(rms,this.volume*this.averaging);}
var create_email=false;var final_transcript='';var recognizing=false;var ignore_onend;var start_timestamp;var oldWord='';var timer;if(!('webkitSpeechRecognition'in window))
{upgrade();}
else
{start_button.style.display='inline-block';var recognition=new webkitSpeechRecognition();recognition.continuous=true;recognition.interimResults=true;recognition.onstart=function(){recognizing=true;micState('speaking');};recognition.onerror=function(event){if(event.error=='no-speech')
{micState('detault');ignore_onend=true;}
if(event.error=='audio-capture')
{micState('detault');ignore_onend=true;}
if(event.error=='not-allowed')
{if(event.timeStamp-start_timestamp<100)
{showAlert('info_blocked');}
else
{showAlert('info_denied');}
ignore_onend=true;}};recognition.onend=function(){recognizing=false;if(ignore_onend)
{return;}
micState('default');if(!final_transcript)
{return;}
if(window.getSelection)
{window.getSelection().removeAllRanges();var range=document.createRange();range.selectNode(document.getElementById('final_span'));window.getSelection().addRange(range);}
if(create_email)
{create_email=false;createEmail();}};recognition.onresult=function(event){var interim_transcript='';var finalFound=false;for(var i=event.resultIndex;i<event.results.length;++i)
{if(event.results[i].isFinal)
{interim_transcript+=event.results[i][0].transcript;finalFound=true;}
else
{interim_transcript+=event.results[i][0].transcript;}}
handlePartial(interim_transcript,oldWord);if(finalFound)
{oldWord="";}
else
{oldWord=interim_transcript;}
if(timer!=null)
{clearInterval(timer);}
timer=setTimeout(function(){if(recognizing)
{stopRecognizing()}
else
{return;}},5000)};}
function stopRecognizing()
{recognition.stop();shutdownNode();document.execCommand('insertText',false,' ');}
function upgrade()
{start_button.style.visibility='hidden';$('.dict-form').css('width','100%')
$('#start_button').hide();}
var two_line=/\n\n/g;var one_line=/\n/g;function linebreak(s)
{return s.replace(two_line,'<p></p>').replace(one_line,'<br>');}
var first_char=/\S/;function capitalize(s)
{return s.replace(first_char,function(m){return m.toUpperCase();});}
function createEmail()
{var n=final_transcript.indexOf('\n');if(n<0||n>=80)
{n=40+final_transcript.substring(40).indexOf(' ');}
var subject=encodeURI(final_transcript.substring(0,n));var body=encodeURI(final_transcript.substring(n+1));window.location.href='mailto:?subject='+subject+'&body='+body;}
function copyButton()
{if(recognizing)
{recognizing=false;recognition.stop();}}
function emailButton()
{if(recognizing)
{create_email=true;recognizing=false;recognition.stop();}
else
{createEmail();}}
function startButton(event)
{if(recognizing)
{stopRecognizing();shutdownNode();return;}
startAudioContext();final_transcript='';recognition.lang='si-LK';recognition.start();ignore_onend=false;micState('speaking');showButtons('none');start_timestamp=event.timeStamp;}
var current_style;function showButtons(style)
{if(style==current_style)
{return;}
current_style=style;}
var working=false;function handlePartial(interim_transcript,oldWord)
{var newWord=interim_transcript;var backSpaceLength=0;var newInsert=null;if(oldWord.length==0)
{backSpaceLength=0;newInsert=newWord;}
else
{for(var i=0;i<oldWord.length;i++)
{if(i<newWord.length&&oldWord.charAt(i)!=newWord.charAt(i))
{backSpaceLength=oldWord.length-i;newInsert=newWord.substring(i);break;}
if(i==oldWord.length-1&&oldWord.length<newWord.length)
{backSpaceLength=0;newInsert=newWord.substring(i+1);}}}
while(working)
{}
working=true;for(var i=0;i<backSpaceLength;i++)
{document.execCommand("delete",false,null);}
if(newInsert!=null)
{document.getElementById("word").focus();document.execCommand('insertText',false,newInsert);showAndHideClearButton();}
working=false;}
function micState(state)
{if(state=='speaking')
{start_img.style.display='none';document.getElementById('meter').style.display='block';}
else if(state=='default')
{start_img.style.display='block';document.getElementById('meter').style.display='none';}
else if(state=='blocked')
{}}