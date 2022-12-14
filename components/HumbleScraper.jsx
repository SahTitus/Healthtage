import React, { useEffect, useState } from "react";
import { scrape, scrape1, scrape2, scrape3 } from "../lib/scrapeApi";
import * as topics from "../constants/topics/topics.js";

const initialState = {
  mbg: false,
  nhs: false,
  mnt: false,
  mbg_pageNum: 1,
  isMbg_latest: false,
  isMbg_page: false,
  healthline: false,
  isCategories: false,
  isTopics: false,
  isGaiam: false,
  isOnhealth: false,
  isMountelizabeth: false,
  isHarvard: false,
  isSelf: false,
  isShape: false,
  isSanteplusmag: false,
  humble: false,
  isArtofhealthyliving: false,
  isEatthis: false,
  isLivestrong: false,
  isWellandgood: false,
  isVerywell: false,
  isDailyburn: false,
  isJusthealthylife: false,
  isLifehack: false,
  isPatient: false,
  isPrestigemensmedical: false,
  isManmatters: false,
  isEverydayhealth: false,
  isWebmd: false,
  isStylesatlife: false,
  isOnlymyhealth: false,
  isWikihow: false,
  terms: [],
  scrape_1: false,
  scrape_2: false,
  scrape_3: false,
  action: false,
};

const HumbleScraper = () => {
  const [scrapeParams, setScrapeParams] = useState(initialState);
  const [errMsg, setErrmsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleMntCate = () => {
    setScrapeParams({
      ...scrapeParams,
      mnt: true,
      isCategories: true,
      terms: topics.mnt_cate_keys,
      humble: true,
      action: true,
    });
  };
  const handleMntTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      mnt: true,
      isTopics: true,
      humble: true,
      terms: topics.mnt_topics_keys,
      action: true,
    });
  };
  const reset = () => {
    setScrapeParams(initialState);
  };

  const handleNhs = () => {
    setScrapeParams({
      ...scrapeParams,
      nhs: true,
      isTopics: true,
      humble: true,
      action: true,
    });
  };

  const handleMbgLatest = () => {
    setScrapeParams({
      ...scrapeParams,
      mbg: true,
      isMbg_latest: true,
      humble: true,
      terms: topics.mbg_keys,
      action: true,
    });
  };

  const handleMbgPages = () => {
    setScrapeParams({
      ...scrapeParams,
      mbg: true,
      isMbg_page: true,
      humble: true,
      terms: topics.mbg_keys,
      action: true,
    });
  };

  const handleHealthlineTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      healthline: true,
      isTopics: true,
      humble: true,
      terms: topics.healthline_topics_keys,
      action: true,
    });
  };

  const handleHealthlineCates = () => {
    setScrapeParams({
      ...scrapeParams,
      healthline: true,
      isCategories: true,
      humble: true,
      terms: topics.healthline_cate_keys,
      action: true,
    });
  };

  const handleHarvard = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.harvard_cate,
      scrape_1: true,
      isHarvard: true,
      action: true,
    });
  };
  const handleGaiam = () => {
    setScrapeParams({
      ...scrapeParams,
      isGaiam: true,
      scrape_2: true,
      action: true,
    });
  };
  const handleSelf = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.self_cate,
      scrape_2: true,
      isSelf: true,
      action: true,
    });
  };
  const handleShape = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.shape_cate,
      scrape_1: true,
      isShape: true,
      action: true,
    });
  };
  const handleOnHealth = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.onhealth_cate,
      scrape_2: true,
      isOnhealth: true,
      action: true,
    });
  };
  const handleMountelizabeth = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.mountelizabeth_cate,
      scrape_2: true,
      isMountelizabeth: true,
      action: true,
    });
  };

  const handleSanteplusmag = () => {
    setScrapeParams({
      ...scrapeParams,
      isSanteplusmag: true,
      scrape_1: true,
      terms: topics.santeplusmag_cate,
      action: true,
    });
  };

  const handleArtofhealthyliving = () => {
    setScrapeParams({
      ...scrapeParams,
      isArtofhealthyliving: true,
      scrape_1: true,
      terms: topics.artofhealthyliving_cate,
      action: true,
    });
  };

  const handleEatthis = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_2: true,
      isEatthis: true,
      terms: topics.eatthis_cate,
      action: true,
    });
  };

  //scrape_3
  const handleLivestrong = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isLivestrong: true,
      terms: topics.livestrong_cate,
      action: true,
    });
  };
  const handleLivestrongTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isTopic: true,
      isLivestrong: true,
      action: true,
    });
  };

  const handleWellandgood = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isWellandgood: true,
      terms: topics.wellandgood_cate,
      action: true,
    });
  };

  const handleVerywellTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isVerywell: true,
      isTopic: true,
      action: true,
    });
  };

  const handleVerywell = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isVerywell: true,
      terms: topics.verywell_cate,
      action: true,
    });
  };

  const handleDailyburn = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isDailyburn: true,
      terms: topics.dailyburn_cate,
      action: true,
    });
  };

  const handleJusthealthlife = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isJusthealthylife: true,
      terms: topics.justhealthlife_cate,
      action: true,
    });
  };
  const handleLifehack = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isLifehack: true,
      terms: topics.lifehack_cate,
      action: true,
    });
  };

  const handlePatient = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isPatient: true,
      terms: topics.patient_cate,
      action: true,
    });
  };
  const handlePrestigemensmedical = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isPrestigemensmedical: true,
      action: true,
    });
  };
  const handleManmatters = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isManmatters: true,
      terms: topics.manmatters_cate,
      action: true,
    });
  };
  const handleEverydayhealth = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isEverydayhealth: true,
      action: true,
    });
  };
  const handleEverydayhealthTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isTopic: true,
      isEverydayhealth: true,
      action: true,
    });
  };
  const handleWebmd = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isWebmd: true,
      terms: topics.webmd_cate,
      action: true,
    });
  };
  const handleWikihow = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isWikihow: true,
      terms: topics.wikihow_cate,
      action: true,
    });
  };
  const handleStylesatlife = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isStylesatlife: true,
      terms: topics.stylesatlife_cate,
      action: true,
    });
  };
  const handleOnlymyhealth = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_3: true,
      isOnlymyhealth: true,
      terms: topics.onlymyhealth_cate,
      action: true,
    });
  };

  // isTopics, isCategories [healthline, medical news]

  const handleScrape = async () => {
    try {
      if (scrapeParams.action && scrapeParams.scrape_1) {
        const { data } = await scrape1(scrapeParams);
      } else if (scrapeParams.action && scrapeParams.scrape_2) {
        const { data } = await scrape2(scrapeParams);
      } else if (scrapeParams.action && scrapeParams.humble) {
        const { data } = await scrape(scrapeParams);
      } else if (scrapeParams.action && scrapeParams.scrape_3) {
        const { data } = await scrape3(scrapeParams);
      }

      setSuccessMsg(data);
    } catch (error) {
      setErrmsg(error);
    }

    // setScrapeParams({ ...scrapeParams, action: false });
  };

  useEffect(() => {
    if (scrapeParams.action) {
      handleScrape();
    }
    setScrapeParams(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrapeParams.action]);

  return (
    <div className="scrape-btn-container">
      <h3>{errMsg.message}</h3>
      <h3>{successMsg.msg}</h3>

      {/* <button type="button" aria-label="humble" onClick={handleNhs}>
        NHS
      </button>
      <button  type="button" aria-label="humble" onClick={handleLivestrongTopics}>Livestrong Topics</button> */}
      {/* <button type="button" aria-label="humble" onClick={handleMntTopics}>
        MNT Topics
      </button> */}
      {/* <button
        type="button"
        aria-label="humble"
        onClick={handleHealthlineTopics}
      >
        Healthline Topics
      </button>
      <button  type="button" aria-label="humble" onClick={handleEverydayhealthTopics}>Everydayhealth Topics</button>
      <button  type="button" aria-label="humble" onClick={handleVerywellTopics}>Verywell Topics</button> */}
      <br />
   
      {/* <button type="button" aria-label="humble" onClick={handleMbgPages}>
        Mbg Pages
      </button>
      <button type="button" aria-label="humble" onClick={handleMbgLatest}>
        Mbg Latest
      </button>
  
      <button type="button" aria-label="humble" onClick={handleMntCate}>
        MNT Categories
      </button> */}
   
      {/* <button type="button" aria-label="humble" onClick={handleHealthlineCates}>
        Healthline Categories
      </button>
      <br />
      <button type="button" aria-label="humble" onClick={handleOnHealth}>
        Onhealth
      </button>
      <button type="button" aria-label="humble" onClick={handleGaiam}>
        Gaiam
      </button>
      <button type="button" aria-label="humble" onClick={handleSanteplusmag}>
        Santeplusmag
      </button>
      <button type="button" aria-label="humble" onClick={handleHarvard}>
        Harvard
      </button>
      <button type="button" aria-label="humble" onClick={handleSelf}>
        Self
      </button>
      <button type="button" aria-label="humble" onClick={handleShape}>
        Shape
      </button>
      <button type="button" aria-label="humble" onClick={handleEatthis}>
        Eat this
      </button>
      <button
        type="button"
        aria-label="humble"
        onClick={handleArtofhealthyliving}
      >
        Artofhealthyliving
      </button>
      <button type="button" aria-label="humble" onClick={handleMountelizabeth}>
        Mountelizabeth
      </button> */}

<br />
      {/* <button  type="button" aria-label="humble" onClick={handleLivestrong}>Livestrong</button>  
      <button  type="button" aria-label="humble" onClick={handleVerywell}>Verywell</button>
      <button  type="button" aria-label="humble" onClick={handleWellandgood}>Wellandgood</button>
      <button  type="button" aria-label="humble" onClick={handleDailyburn}>Dailyburn</button>
      <button  type="button" aria-label="humble" onClick={handleJusthealthlife}>Justhealthlife</button>
      <button  type="button" aria-label="humble" onClick={handleLifehack}>Lifehack</button>
      <button  type="button" aria-label="humble" onClick={handlePatient}>Patient</button>
      <button  type="button" aria-label="humble" onClick={handlePrestigemensmedical}>Prestigemensmedical</button>
      <button  type="button" aria-label="humble" onClick={handleManmatters}>Manmatters</button>
      <button  type="button" aria-label="humble" onClick={handleEverydayhealth}>Everydayhealth</button>
      <button  type="button" aria-label="humble" onClick={handleWebmd}>Webmd</button>
      <button  type="button" aria-label="humble" onClick={handleStylesatlife}>Stylesatlife</button>
      <button  type="button" aria-label="humble" onClick={handleOnlymyhealth}>Onlymyhealth</button>
      <button  type="button" aria-label="humble" onClick={handleWikihow}>Wikihow</button> */}

      <button
        type="button"
        aria-label="humble"
        className="scrape-reset-btn"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default HumbleScraper;
