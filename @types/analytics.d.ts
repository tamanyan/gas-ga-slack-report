/**
 * Copyright(c) 2018
 *
 * @summary analytics.d.ts
 * @author Taketo Yoshida
 */

declare namespace GoogleAppsScript {
  export module Analytics {
    interface Analytics {
      Data: Data
    }

    interface Data {
      Ga: Ga
    }

    interface Ga {
      get(tableId: string, startDate: string, endDate: string, metric: string, options: any): Report;
    }

    interface ColumnHeader {
      columnType: string,
      dataType: string,
      name: string
    }

    interface ProfileInfo {
      profileId: string
      accountId: string
      webPropertyId: string
      internalWebPropertyId: string
      profileName: string
      tableId: string
    }

    interface Report {
      kind: string
      id: string
      selfLink: string
      containsSampledData: boolean
      query?: Object
      itemsPerPage: number
      totalResults: number
      previousLink?: number
      nextLink?: number
      profileInfo: ProfileInfo
      rows: string[][]
      columnHeaders: ColumnHeader[]
      sampleSize?: string
      sampleSpace?: string
      totalsForAllResults: Object
    }
  }
}

declare var Analytics: GoogleAppsScript.Analytics.Analytics;
