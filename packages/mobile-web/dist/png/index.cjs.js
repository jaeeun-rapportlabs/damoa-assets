'use strict';

var ic_minus_16_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA9SURBVHgB7csxDQAgEAPAQvDGggPMoAYFDGwERUgoYSM//fz5m9o0BZwB4S+51KU7cc/R28tJLCpkPHCWXA1uCPbnal1gAAAAAElFTkSuQmCC";

var ic_minus_16_2x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7dChDYBQDIThK2E2FBOwDG8aPAbDErABk1CQQFLXBPH+T1S0FZeTAAConUWHrh9GJfNT87pM23PXRs9mVpTNdNzzFaDRz8IG3L0ombt2AQCAjwttSg+M8GtdbAAAAABJRU5ErkJggg==";

var ic_minus_16_3x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABVSURBVHgB7dOxCYAwEAXQS3SwlBYO4IgOYGGnk6kTBFIIIfBee9f8Dz8CAAAAGFJqeVrWrURH57HftdscDd40XdFXtegcgxOgt6YNPJFLAAAAAPzpA3aYBxM3h/gNAAAAAElFTkSuQmCC";

var ic_tab_cart_on_24_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgB3ZPhDcIgEIVfjf9lA28E3cBR3IQwgSOoEzhCR3AFN9ANzmtyJhVIafCIxi/5QnpteRSuwI9AYi/e1aPWinQzniGd3IknHXd6bys+8CEHkfG+YtKahwG9GnMVL4V3sczU9uJ6dE06xqsdtmoT1W/iGQWG1XKlyZcuMgEO9VDrgIRcm3Jc8D7fLCGE4pyzApgZ2Zm6rhgQQ6g/4JfjDkzOwHT/WwXQVIAFbiqA0DhghcYBFmfw5wGExgEWmP+s3+UJJZw5YMP+UcsAAAAASUVORK5CYII=";

var ic_tab_cart_on_24_2x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFKSURBVHgB7ZbhrcIwDISPp/cfNsAbMAKMwAhsACOwASPACGwAGzAC3QA2KKkoIiDFCU1Q7JJPshTJV8XX2G2AQv8gExsTZxN1GycT2zYnmhWeRbtiDaGs4S9erIkFXgs8mJiaGLX5Zn1608whCLvft4xuZ+nOEMIMr0URo21O5GLpZ4jkD/FMrPXRRMVoryb2jmc7kcLAyFpXAfrK8WwnUhgQzxLhn8fUsfQVF3IC0cccgXfvYuDLJDFAyEcSAzlR30LkE0g34GUQoKkDNKjrINlz40HI1ncpl1T/J/YZIORnzCX/wRPc/x+0RFJ8JyBhgIlLapgB9iVqmIEoA0PkJ8qAhBkoBnLz20MsAfUtRFxSgwEW3wXmszvy93DW2evrNEEOzis1Z0B8/zdoMUCuhJYZcL5MLTPQyYCEq/SDTgYkzUB/DRQKv84Nd51cdd4Hzv8AAAAASUVORK5CYII=";

var ic_tab_cart_on_24_3x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgB7ZnRUQIxEIZ/HN+lA7YES8BKtAPsAKlArcASsAMsQStAK4AOzmTgZgTi7G64hEmy38w+eCQ3w3fJf2YBDMOomLGrmaulq7Wrbl8bVytX964IDeLFPGEnohPUMxoSdYvD1SItP4dQOV6OdNWEarO/RzZGyAdhlysU+Gzr6t3V9/5vL2GK3VY8xo+5+zO2Gt4QXhVzhEVg/1lozhKVQYjfLv9tyykqIrR6Zor5jwi/2aphjdM3kpYVTldgcq6QHp8vdHTtBXo+AvedIDE5BIVy5hN6vgLXCInJIWgotrgAJQm6CNfQ0x8wpVDg2gP0r2ka4D6vyLASfaZ0hdYESmK22BjlQlDSWgapH26MIEK5ZBF0g3LJIqjkDDJBDCaIwUKaIYugkrEtxkBQEnsWi2I+n2MIFosFchHzq0aHSLoueuoBo9FZP8aoJlu7g0EriFA+qhO9VlDJAR2FNqTPEnRmdgwFufqRDm4xg1QPucUMSiqo5FZHT1JBNYS0CWIwQQwW0gxJBdWAbTEG0gy2owaD9n//YfoVl0f8va3dwaARRKgHcctDI6i5/PG0KoikA1vNIPHDbjWDkgiqodXRk0RQTRlkghhMEIOFNEMSQTVhW4yBpAPtqMGgaXfU0uroEX13a3cwSAUR6kPU8pAKajJ/PC0LIsmgljNI9NBbzqBmY8MwDMNohV/dH6YQp1tL0gAAAABJRU5ErkJggg==";

var ic_tab_marchhome_on_24_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgB7ZRBDYQwEEUnmxWAhJWAg91VABKQgIQ6AQmgAAngAAngAKZhmhSSKYW2gQM/eaeZvp+mSQFulhwRECglMhEFeEyENJpc0dLMKR8STQw97ZyW9wa5U0lsKddLYlv5DxkOyBXyTLonz06It+ScXHiQK0RI+eomLyr4gv8kekGwPAXXF7wtdkakY2bye4hcC6T8z8waWL4WNs8jX1+gHrk27FSG2e65Gez/djZI1v2XAAAAAElFTkSuQmCC";

var ic_tab_marchhome_on_24_2x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7ZjdDYIwFIWPPwO4gd1AR3AEN5ARHKFOom7iBsYJwAkYQfvQRoJBaHvhtuZ+yZeQAOGcBzgJgMDLAuNSGDfGBzLkYnxZz8iIlfGOT3jn3Z5LGmUs8R3eWdprkkThd/ikS2wxLHyzxBaJsDfWGB7eWdt7WTnCP3jbI5jQiA/v1JgYDbrwk5e4gD78JIPXNVDUjjJ4Cn6fyVhLEG6FwrThSUv4DtQYJYIHL3SgqA0aPIqBonbw4GmAPWyXOufwvSWKhEL2eXCh540Ca+SDcgdzZI4U4EYKcCMFuJEC3EgBbrIvsAQNN6sPO2sUlAVO8GeHSOQd4EYKcCMFuJEC3PxVgSfCqeAPyfNmrRMF/H9wVcYrwihin/cGDkvG95AvcaMAAAAASUVORK5CYII=";

var ic_tab_marchhome_on_24_3x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG1SURBVHgB7ZvbbcJAFEQnKP+kBJdAOkkplLAdJB3gVlIB6cAlkFRAbMmbEAcYjO8+7J0jzQcCpKtj2Tta24AQoiA2fcQZ6jbHPq8QPzy12eNXjs++/65oqjYN/svxafrfFEmF63KKltRdiG+RcyqpmIv3S5sDbpfjc+j/u2i2GC9mmC0WisN0OT4OC8PBTs7iJNWwl+Ozw4y5VACtM8tCWWHcMj41DWbUlSrElTMrSWMLYAhJ2RbKewugdbIslBYF0DrZFEqH/OT4OCTGIV85ySXVyF+Ozw4RiVUArROlUFZIu4xPTYOAXanCvOUElZS6AIaQZFYocymA1jEplDkWQOvcXSgdgGMhcZAcO0lvQPJhU2UHwiaTQVPmz+q2Gggq/l54y/r0wwriKhJEkCCCBBEkiCBBBAkiSBBBgggSRJAgggQRJIggQQQJIkgQQYIIEkSQIMIj4tHdoPuADc+I9NJdTEGdnHfY8IBI6BQjSBBBgggSRJAgggQRJIggQQQJIkgQQYIIEkSQIIIEEYaCPhGOL9iRdM5uI8r6ydEQm1tR5ry08dQ9CruGDd0RsdpJHBJ8zm+lmRmXxNmnTQAAAABJRU5ErkJggg==";

var ic_tab_profile_24_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB3ZSBDYIwEEU/xgHYwI7ABnYT2YARYAPcADdwBEYgTgAbGCdATq7hQgpiWxPjSy497trrtb0D+BH0IPUg90F61hUCoTkoBS9ZWrZpBKBliYUtZlsDTxKMmZ4svox9h7UAO6xjsu4svhuPCh4bdDwmFp/i8QFPqGLmbwBMb+ONxnjXlbBdsPw2TuQckKqmZj1HYExgkisCokRwGivWWwTo5gJjB5Nkwp5i6uYCDlBZNpiuI7bMUXA4DQU6i0XHDWtSbDyNFhNL2LNeQvEak5itMT/KGhuStG4QorZNz7x49y/y5usb7GffGv5o+REJvUdYIvwFT9TxRxYk7T4ZAAAAAElFTkSuQmCC";

var ic_tab_profile_24_2x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7ZiNUcMwDIUfHAOwAd6AbFCPwAZkA7pB2QA26AiwQUcoG7RMkBFKdE2uiisnTp1UPurvTndu7PSkJ/knBjL/D1vburZdbYfGts0zi4QxtW1wctpnm2ZsUhh0FR+yHRILwnV+VduC9Rc4lpAbxCMSYImTUxWOzvoomjE8UHW4+m8B492AVbHolkQoPAsFIrhHHIa1fxDON2s/I4LYAJ5Ye0wAe9Y2iCA2AHViA/hlbYNweN3voQg5wleU0HWdr1wLKMOdCVnXS1y2cs0GOc2zYHrGUt/YgGeHyoY75Tsi0LMtEj0P8bkgOec6T/aCxCghB1FAPuwlCT/n+CxZ51uoNFzF2wn+iomZeiemWqeSMZ4+iwS/xloszpWvhGf0e/JMxEDKfsL/7Uu2FvrXSCAbFrLq0odNiYSyMaS6D+pTzwatMhXiVpgSCtkwtX3hXD16dsntAr3zgStlgzYoV3VSbIF4LOR5tMQEGMi3baTclHc69F8rjJ9Tvcypug8DeRd/xwgMrqN6H1I2dgjMhqs6HYPnVN2HgZyNQVI7ObrZ6HAnvHAY6NfA69PN3wupkwPQJgegzcNAf9DGoUkuoUwmo8sfeCb8Dqbzt2UAAAAASUVORK5CYII=";

var ic_tab_profile_24_3x_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7Zv9cZwwEMVfMikgJWwHcQcoFcQdmA6SDqCDSwc3qSBxBU4Hdio4OrA7iNkxN2a41QfiJJDQb2b/OA7B8fS06OuAQqEQkA9YF9XHtz5uhvg8HH/p42mI+z7+YmeoPh76+O8Ypz7usAPYIT/hLsw0Dnh3WXbwgz3CX5xzPCKiSDFzEDcppfmuw1ue6YbP55xEmvP53K/IiBayG1i0ylCOv9O57gcygSA/YDPjGo1Q/hmZ5KMj5GQ7lwOWibxZTrh8ZfvUPJd5xqWLkkbhsta/wx+pqSkE5CPCUgnH7uHPL+HYFwQktEA0+cxDiA7+dMM1xtwgILEFesJyOss9rkpogULwgoiEFmj6MMn1W2ILRFjONOd0CEhogaY5hx2k4M94zkh3j6sSWqB/wrEK/khlgwoUA6n365uLpF558ki9X5+xWCtc54gMkMZQc4cIBHlGgJAJuukKcijL55yQqXvGSBNf/OBkKEOQxbGVSxKC3NR0D0uQxeEIOv5aEwX5gVm48RTqLWQxl06XJEENGJd1TMtCDXZCDViXd3bnnCmcR3Q5Ztr8KuyUGnaBdtOsxsxdgn5Ahq91HfyGcmlaUlNrkTHsmt+wN6caZgF1/aak4T6Orl9zbkLjzh9BXnAcR4sMIJj3AbFoptd3jYzd5OIacrgOn5OVmwjLXKOjRgZuanEd1+jgRH9Agm7iBGvaPcai3eJ6KNjdpLABXDp8R4RbD2ss9151T6OCvRYrhIccfscdIuLimjVqzuYmdjIhMArbcI0OwkpuYjccseH2PiGqm0zTnxz89triHDEhsJsI9g5fg+3Dv9FUwd5uCtnhiw3BXNkneKBzTcpzw6bx4WykXENIH4LsJpE521/+IPBmpUh0mPH/sxT3KEalCGShCGShCGShCGShCGShCGShCGShCGTh04xzFfJBuZ5o+lu41wAuYUQtShOzUASyUAQqFAqFQiFbXgH03yPaYyX+QwAAAABJRU5ErkJggg==";

const ic_minus_16 = ic_minus_16_png;
    const ic_minus_16_2x = ic_minus_16_2x_png;
    const ic_minus_16_3x = ic_minus_16_3x_png;

    const ic_tab_cart_on_24 = ic_tab_cart_on_24_png;
    const ic_tab_cart_on_24_2x = ic_tab_cart_on_24_2x_png;
    const ic_tab_cart_on_24_3x = ic_tab_cart_on_24_3x_png;

    const ic_tab_marchhome_on_24 = ic_tab_marchhome_on_24_png;
    const ic_tab_marchhome_on_24_2x = ic_tab_marchhome_on_24_2x_png;
    const ic_tab_marchhome_on_24_3x = ic_tab_marchhome_on_24_3x_png;

    const ic_tab_profile_24 = ic_tab_profile_24_png;
    const ic_tab_profile_24_2x = ic_tab_profile_24_2x_png;
    const ic_tab_profile_24_3x = ic_tab_profile_24_3x_png;

exports.ic_minus_16 = ic_minus_16;
exports.ic_minus_16_2x = ic_minus_16_2x;
exports.ic_minus_16_3x = ic_minus_16_3x;
exports.ic_tab_cart_on_24 = ic_tab_cart_on_24;
exports.ic_tab_cart_on_24_2x = ic_tab_cart_on_24_2x;
exports.ic_tab_cart_on_24_3x = ic_tab_cart_on_24_3x;
exports.ic_tab_marchhome_on_24 = ic_tab_marchhome_on_24;
exports.ic_tab_marchhome_on_24_2x = ic_tab_marchhome_on_24_2x;
exports.ic_tab_marchhome_on_24_3x = ic_tab_marchhome_on_24_3x;
exports.ic_tab_profile_24 = ic_tab_profile_24;
exports.ic_tab_profile_24_2x = ic_tab_profile_24_2x;
exports.ic_tab_profile_24_3x = ic_tab_profile_24_3x;
