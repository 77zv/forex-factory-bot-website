const GMT_TO_IANA = {
  GMT_P0: 'Etc/GMT+0',
  GMT_P1: 'Etc/GMT-1',    
  GMT_P2: 'Etc/GMT-2',
  GMT_P3: 'Etc/GMT-3',
  GMT_P4: 'Etc/GMT-4',
  GMT_P5: 'Etc/GMT-5',
  GMT_P6: 'Etc/GMT-6',
  GMT_P7: 'Etc/GMT-7',
  GMT_P8: 'Etc/GMT-8',
  GMT_P9: 'Etc/GMT-9',
  GMT_P10: 'Etc/GMT-10',
  GMT_P11: 'Etc/GMT-11',
  GMT_P12: 'Etc/GMT-12',
  GMT_N1: 'Etc/GMT+1',
  GMT_N2: 'Etc/GMT+2',
  GMT_N3: 'Etc/GMT+3',
  GMT_N4: 'Etc/GMT+4',
  GMT_N5: 'Etc/GMT+5',
  GMT_N6: 'Etc/GMT+6',
  GMT_N7: 'Etc/GMT+7',
  GMT_N8: 'Etc/GMT+8',
  GMT_N9: 'Etc/GMT+9',
  GMT_N10: 'Etc/GMT+10',
  GMT_N11: 'Etc/GMT+11',
  GMT_N12: 'Etc/GMT+12',
  DEFAULT: 'America/New_York'
};

export function getIANATimezone(gmtTimezone: string): string {
  return GMT_TO_IANA[gmtTimezone as keyof typeof GMT_TO_IANA] || GMT_TO_IANA.DEFAULT;
} 