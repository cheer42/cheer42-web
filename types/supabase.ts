/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/events": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.events.id"];
          slug?: parameters["rowFilter.events.slug"];
          title?: parameters["rowFilter.events.title"];
          cover_url?: parameters["rowFilter.events.cover_url"];
          content?: parameters["rowFilter.events.content"];
          excerpts?: parameters["rowFilter.events.excerpts"];
          documents?: parameters["rowFilter.events.documents"];
          date?: parameters["rowFilter.events.date"];
          updated_at?: parameters["rowFilter.events.updated_at"];
          updated_by?: parameters["rowFilter.events.updated_by"];
          created_at?: parameters["rowFilter.events.created_at"];
          created_by?: parameters["rowFilter.events.created_by"];
          is_registration_opened?: parameters["rowFilter.events.is_registration_opened"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["events"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** events */
          events?: definitions["events"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.events.id"];
          slug?: parameters["rowFilter.events.slug"];
          title?: parameters["rowFilter.events.title"];
          cover_url?: parameters["rowFilter.events.cover_url"];
          content?: parameters["rowFilter.events.content"];
          excerpts?: parameters["rowFilter.events.excerpts"];
          documents?: parameters["rowFilter.events.documents"];
          date?: parameters["rowFilter.events.date"];
          updated_at?: parameters["rowFilter.events.updated_at"];
          updated_by?: parameters["rowFilter.events.updated_by"];
          created_at?: parameters["rowFilter.events.created_at"];
          created_by?: parameters["rowFilter.events.created_by"];
          is_registration_opened?: parameters["rowFilter.events.is_registration_opened"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.events.id"];
          slug?: parameters["rowFilter.events.slug"];
          title?: parameters["rowFilter.events.title"];
          cover_url?: parameters["rowFilter.events.cover_url"];
          content?: parameters["rowFilter.events.content"];
          excerpts?: parameters["rowFilter.events.excerpts"];
          documents?: parameters["rowFilter.events.documents"];
          date?: parameters["rowFilter.events.date"];
          updated_at?: parameters["rowFilter.events.updated_at"];
          updated_by?: parameters["rowFilter.events.updated_by"];
          created_at?: parameters["rowFilter.events.created_at"];
          created_by?: parameters["rowFilter.events.created_by"];
          is_registration_opened?: parameters["rowFilter.events.is_registration_opened"];
        };
        body: {
          /** events */
          events?: definitions["events"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/application_tries": {
    get: {
      parameters: {
        query: {
          event_id?: parameters["rowFilter.application_tries.event_id"];
          applicant_id?: parameters["rowFilter.application_tries.applicant_id"];
          number?: parameters["rowFilter.application_tries.number"];
          message?: parameters["rowFilter.application_tries.message"];
          documents?: parameters["rowFilter.application_tries.documents"];
          answer?: parameters["rowFilter.application_tries.answer"];
          answered_by?: parameters["rowFilter.application_tries.answered_by"];
          is_accepted?: parameters["rowFilter.application_tries.is_accepted"];
          updated_at?: parameters["rowFilter.application_tries.updated_at"];
          created_at?: parameters["rowFilter.application_tries.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["application_tries"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** application_tries */
          application_tries?: definitions["application_tries"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          event_id?: parameters["rowFilter.application_tries.event_id"];
          applicant_id?: parameters["rowFilter.application_tries.applicant_id"];
          number?: parameters["rowFilter.application_tries.number"];
          message?: parameters["rowFilter.application_tries.message"];
          documents?: parameters["rowFilter.application_tries.documents"];
          answer?: parameters["rowFilter.application_tries.answer"];
          answered_by?: parameters["rowFilter.application_tries.answered_by"];
          is_accepted?: parameters["rowFilter.application_tries.is_accepted"];
          updated_at?: parameters["rowFilter.application_tries.updated_at"];
          created_at?: parameters["rowFilter.application_tries.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          event_id?: parameters["rowFilter.application_tries.event_id"];
          applicant_id?: parameters["rowFilter.application_tries.applicant_id"];
          number?: parameters["rowFilter.application_tries.number"];
          message?: parameters["rowFilter.application_tries.message"];
          documents?: parameters["rowFilter.application_tries.documents"];
          answer?: parameters["rowFilter.application_tries.answer"];
          answered_by?: parameters["rowFilter.application_tries.answered_by"];
          is_accepted?: parameters["rowFilter.application_tries.is_accepted"];
          updated_at?: parameters["rowFilter.application_tries.updated_at"];
          created_at?: parameters["rowFilter.application_tries.created_at"];
        };
        body: {
          /** application_tries */
          application_tries?: definitions["application_tries"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/comments": {
    get: {
      parameters: {
        query: {
          news_id?: parameters["rowFilter.comments.news_id"];
          commenter_id?: parameters["rowFilter.comments.commenter_id"];
          content?: parameters["rowFilter.comments.content"];
          updated_at?: parameters["rowFilter.comments.updated_at"];
          created_at?: parameters["rowFilter.comments.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["comments"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** comments */
          comments?: definitions["comments"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          news_id?: parameters["rowFilter.comments.news_id"];
          commenter_id?: parameters["rowFilter.comments.commenter_id"];
          content?: parameters["rowFilter.comments.content"];
          updated_at?: parameters["rowFilter.comments.updated_at"];
          created_at?: parameters["rowFilter.comments.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          news_id?: parameters["rowFilter.comments.news_id"];
          commenter_id?: parameters["rowFilter.comments.commenter_id"];
          content?: parameters["rowFilter.comments.content"];
          updated_at?: parameters["rowFilter.comments.updated_at"];
          created_at?: parameters["rowFilter.comments.created_at"];
        };
        body: {
          /** comments */
          comments?: definitions["comments"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          second_name?: parameters["rowFilter.profiles.second_name"];
          father_name?: parameters["rowFilter.profiles.father_name"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          second_name?: parameters["rowFilter.profiles.second_name"];
          father_name?: parameters["rowFilter.profiles.father_name"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          second_name?: parameters["rowFilter.profiles.second_name"];
          father_name?: parameters["rowFilter.profiles.father_name"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/news": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.news.id"];
          slug?: parameters["rowFilter.news.slug"];
          title?: parameters["rowFilter.news.title"];
          cover_url?: parameters["rowFilter.news.cover_url"];
          content?: parameters["rowFilter.news.content"];
          excerpts?: parameters["rowFilter.news.excerpts"];
          documents?: parameters["rowFilter.news.documents"];
          updated_at?: parameters["rowFilter.news.updated_at"];
          updated_by?: parameters["rowFilter.news.updated_by"];
          created_at?: parameters["rowFilter.news.created_at"];
          created_by?: parameters["rowFilter.news.created_by"];
          event_id?: parameters["rowFilter.news.event_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["news"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** news */
          news?: definitions["news"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.news.id"];
          slug?: parameters["rowFilter.news.slug"];
          title?: parameters["rowFilter.news.title"];
          cover_url?: parameters["rowFilter.news.cover_url"];
          content?: parameters["rowFilter.news.content"];
          excerpts?: parameters["rowFilter.news.excerpts"];
          documents?: parameters["rowFilter.news.documents"];
          updated_at?: parameters["rowFilter.news.updated_at"];
          updated_by?: parameters["rowFilter.news.updated_by"];
          created_at?: parameters["rowFilter.news.created_at"];
          created_by?: parameters["rowFilter.news.created_by"];
          event_id?: parameters["rowFilter.news.event_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.news.id"];
          slug?: parameters["rowFilter.news.slug"];
          title?: parameters["rowFilter.news.title"];
          cover_url?: parameters["rowFilter.news.cover_url"];
          content?: parameters["rowFilter.news.content"];
          excerpts?: parameters["rowFilter.news.excerpts"];
          documents?: parameters["rowFilter.news.documents"];
          updated_at?: parameters["rowFilter.news.updated_at"];
          updated_by?: parameters["rowFilter.news.updated_by"];
          created_at?: parameters["rowFilter.news.created_at"];
          created_by?: parameters["rowFilter.news.created_by"];
          event_id?: parameters["rowFilter.news.event_id"];
        };
        body: {
          /** news */
          news?: definitions["news"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  events: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    slug: string;
    /** Format: character varying */
    title: string;
    /** Format: character varying */
    cover_url?: string;
    /** Format: character varying */
    content: string;
    /** Format: character varying */
    excerpts: string;
    /** Format: ARRAY */
    documents?: unknown[];
    /** Format: date */
    date: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    updated_by?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    created_by: string;
    /** Format: boolean */
    is_registration_opened: boolean;
  };
  /** @description Попытки подать заявку на событие */
  application_tries: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `events.id`.<fk table='events' column='id'/>
     */
    event_id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    applicant_id: string;
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    number: number;
    /** Format: character varying */
    message?: string;
    /** Format: ARRAY */
    documents?: unknown[];
    /** Format: character varying */
    answer?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    answered_by?: string;
    /** Format: boolean */
    is_accepted: boolean;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
  };
  /** @description Комментарии к новости */
  comments: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `news.id`.<fk table='news' column='id'/>
     */
    news_id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    commenter_id: string;
    /** Format: character varying */
    content: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at?: string;
    /**
     * Format: timestamp with time zone
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default now()
     */
    created_at: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    first_name: string;
    /** Format: character varying */
    second_name: string;
    /** Format: character varying */
    father_name?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at: string;
    /** Format: character varying */
    avatar_url?: string;
  };
  /** @description Таблица с новостями и событиями */
  news: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    slug: string;
    /** Format: character varying */
    title: string;
    /** Format: character varying */
    cover_url?: string;
    /** Format: character varying */
    content: string;
    /** Format: character varying */
    excerpts: string;
    /** Format: ARRAY */
    documents?: unknown[];
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    updated_by?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    created_by: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `events.id`.<fk table='events' column='id'/>
     */
    event_id?: number;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description events */
  "body.events": definitions["events"];
  /** Format: bigint */
  "rowFilter.events.id": string;
  /** Format: character varying */
  "rowFilter.events.slug": string;
  /** Format: character varying */
  "rowFilter.events.title": string;
  /** Format: character varying */
  "rowFilter.events.cover_url": string;
  /** Format: character varying */
  "rowFilter.events.content": string;
  /** Format: character varying */
  "rowFilter.events.excerpts": string;
  /** Format: ARRAY */
  "rowFilter.events.documents": string;
  /** Format: date */
  "rowFilter.events.date": string;
  /** Format: timestamp with time zone */
  "rowFilter.events.updated_at": string;
  /** Format: uuid */
  "rowFilter.events.updated_by": string;
  /** Format: timestamp with time zone */
  "rowFilter.events.created_at": string;
  /** Format: uuid */
  "rowFilter.events.created_by": string;
  /** Format: boolean */
  "rowFilter.events.is_registration_opened": string;
  /** @description application_tries */
  "body.application_tries": definitions["application_tries"];
  /** Format: bigint */
  "rowFilter.application_tries.event_id": string;
  /** Format: uuid */
  "rowFilter.application_tries.applicant_id": string;
  /** Format: integer */
  "rowFilter.application_tries.number": string;
  /** Format: character varying */
  "rowFilter.application_tries.message": string;
  /** Format: ARRAY */
  "rowFilter.application_tries.documents": string;
  /** Format: character varying */
  "rowFilter.application_tries.answer": string;
  /** Format: uuid */
  "rowFilter.application_tries.answered_by": string;
  /** Format: boolean */
  "rowFilter.application_tries.is_accepted": string;
  /** Format: timestamp with time zone */
  "rowFilter.application_tries.updated_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.application_tries.created_at": string;
  /** @description comments */
  "body.comments": definitions["comments"];
  /** Format: bigint */
  "rowFilter.comments.news_id": string;
  /** Format: uuid */
  "rowFilter.comments.commenter_id": string;
  /** Format: character varying */
  "rowFilter.comments.content": string;
  /** Format: timestamp with time zone */
  "rowFilter.comments.updated_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.comments.created_at": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: character varying */
  "rowFilter.profiles.first_name": string;
  /** Format: character varying */
  "rowFilter.profiles.second_name": string;
  /** Format: character varying */
  "rowFilter.profiles.father_name": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: character varying */
  "rowFilter.profiles.avatar_url": string;
  /** @description news */
  "body.news": definitions["news"];
  /** Format: bigint */
  "rowFilter.news.id": string;
  /** Format: character varying */
  "rowFilter.news.slug": string;
  /** Format: character varying */
  "rowFilter.news.title": string;
  /** Format: character varying */
  "rowFilter.news.cover_url": string;
  /** Format: character varying */
  "rowFilter.news.content": string;
  /** Format: character varying */
  "rowFilter.news.excerpts": string;
  /** Format: ARRAY */
  "rowFilter.news.documents": string;
  /** Format: timestamp with time zone */
  "rowFilter.news.updated_at": string;
  /** Format: uuid */
  "rowFilter.news.updated_by": string;
  /** Format: timestamp with time zone */
  "rowFilter.news.created_at": string;
  /** Format: uuid */
  "rowFilter.news.created_by": string;
  /** Format: bigint */
  "rowFilter.news.event_id": string;
}

export interface operations {}

export interface external {}
