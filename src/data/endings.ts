type Ending = {
  url: string;
  hasBucketEnding?: boolean;
  endings?: {
    [key: string]: Ending;
  };
};

export const ENDINGS: {
  [key: string]: Ending;
} = {
  "Left door endings": {
    url: "Left_door_endings",
    hasBucketEnding: true,
    endings: {
      "Freedom Ending": {
        url: "Freedom_Ending",
        hasBucketEnding: true,
      },
      "Countdown Ending": {
        url: "Countdown_Ending",
        hasBucketEnding: true,
      },
      "Bottom of the Mind Control Room Ending": {
        url: "Bottom_of_the_Mind_Control_Room_Ending",
        hasBucketEnding: true,
      },
      "Museum Ending": {
        url: "Museum_Ending",
        hasBucketEnding: true,
      },
      "Elevator Ending": {
        url: "Elevator_Ending",
        hasBucketEnding: true,
      },
      "Mariella Ending": {
        url: "Mariella_Ending",
        hasBucketEnding: true,
      },
      "Escape Pod Ending": {
        url: "Escape_Pod_Ending",
        hasBucketEnding: true,
      },
      "Heaven Ending": {
        url: "Heaven_Ending",
        hasBucketEnding: true,
      },
      "Broom Closet Ending": {
        url: "Broom_Closet_Ending",
        hasBucketEnding: true,
      },
    },
  },
  "Right door endings": {
    url: "Right_door_endings",
    hasBucketEnding: true,
    endings: {
      "Confusion Ending": {
        url: "Confusion_Ending",
        hasBucketEnding: true,
      },
      "Powerful Ending": {
        url: "Powerful_Ending",
        hasBucketEnding: true,
      },
      "Cold Feet Ending": {
        url: "Cold_Feet_Ending",
        hasBucketEnding: true,
      },
      "Vent Ending": {
        url: "Vent_Ending",
        hasBucketEnding: true,
      },
      "Apartment Ending": {
        url: "Apartment_Ending",
        hasBucketEnding: true,
      },
      "Not Stanley Ending": {
        url: "Not_Stanley_Ending",
        hasBucketEnding: true,
      },
      Zending: {
        url: "Zending",
      },
      "Games Ending": {
        url: "Games_Ending",
        endings: {
          "Getting Stuck in the Test Chamber": {
            url: "Getting_Stuck_in_the_Test_Chamber",
          },
        },
      },
      "Art Ending": {
        url: "Art_Ending",
      },
    },
  },
  "Pre-Two Doors Room endings": {
    url: "Pre-Two_Doors_Room_endings",
    hasBucketEnding: true,
    endings: {
      "Coward Ending": {
        url: "Coward_Ending",
        hasBucketEnding: true,
      },
      "Out of Map Ending": {
        url: "Out_of_Map_Ending",
        hasBucketEnding: true,
      },
      "Serious Ending": {
        url: "Serious_Ending",
        hasBucketEnding: true,
      },
      "Whiteboard Ending": {
        url: "Whiteboard_Ending",
        hasBucketEnding: true,
      },
    },
  },
  "Bucket Endings": {
    url: "Bucket_Endings",
    hasBucketEnding: true,
    endings: {
      "No Buckets Ending": {
        url: "No_Buckets_Ending",
        hasBucketEnding: true,
      },
    },
  },
  "Progression Endings": {
    url: "Progression_Endings",
    hasBucketEnding: true,
    endings: {
      "Paywall Ending": {
        url: "Paywall_Ending",
        hasBucketEnding: true,
      },
      "New Content Ending": {
        url: "New_Content_Ending",
        hasBucketEnding: true,
      },
      "Skip Button Ending": {
        url: "Skip_Button_Ending",
        hasBucketEnding: true,
      },
      "Sequel Ending": {
        url: "Sequel_Ending",
        hasBucketEnding: true,
        endings: {
          "Infinite Hole Ending": {
            url: "Infinite_Hole_Ending",
            hasBucketEnding: true,
          },
        },
      },
      "Figurines Ending": {
        url: "Figurines_Ending",
        hasBucketEnding: true,
      },
      Epilogue: {
        url: "Epilogue",
        hasBucketEnding: true,
      },
    },
  },
};
