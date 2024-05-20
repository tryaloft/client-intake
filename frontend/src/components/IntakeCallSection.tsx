import React, { useEffect, useRef, useState } from "react";
import { Box, Link, Slider, Stack, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

import { useSelector } from "react-redux";
import { selectCaseData } from "../state/selectors/client-selectors";
import { formatCallDuration } from "../utils/time";
import { PurpleIconButton } from "./base/Buttons";
import ClientScreenTile from "./base/ClientScreenTile";

const IntakeCallSection: React.FC = () => {
  const [audioFileSeconds, setAudioFileSeconds] = useState<number>(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const caseData = useSelector(selectCaseData);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setAudioFileSeconds(newValue as number);
    console.log("new value", newValue   )
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updatePosition = () => {
      if (audio) {
        const currentTime = (audio.currentTime / audio.duration) * 100;
        setAudioFileSeconds(currentTime);
      }
    };
    console.log("current time", audio?.currentTime, audio?.duration)
    audio?.addEventListener("timeupdate", updatePosition);

    return () => {
      audio?.removeEventListener("timeupdate", updatePosition);
    };
  }, []);

  function formatIntakeCall(): string {
    if (!caseData?.intake_call) {
      return "";
    }
    const { intaker, start_timestamp } = caseData?.intake_call;
    const date = new Date(start_timestamp);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    console.log("intaker", intaker);
    const formattedDate = date.toLocaleDateString("en-US", options);
    return `Conducted by ${intaker} on ${formattedDate}`;
  }

  return (
    <ClientScreenTile>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "flex-start" }}
        justifyContent={"space-between"}
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="h1">Intake Call</Typography>
          <Typography variant="subtitle1">{formatIntakeCall()}</Typography>
        </Stack>
        <Stack direction="row" gap={"24px"}>
          <Link
            component="button"
            variant="body1"
            onClick={() => {
              console.info("TODO: Download MP3");
            }}
          >
            View Transcript
          </Link>

          <Link
            component="button"
            variant="body1"
            onClick={() => {
              console.info("TODO: Download MP3");
            }}
          >
            Download MP3
          </Link>
        </Stack>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "24px" }}>
      <audio ref={audioRef} src="/Pendretti.mp3" />
        <PurpleIconButton onClick={togglePlayPause} disableRipple>
          {isPlaying ? (
            <PauseCircleFilledIcon fontSize="large" />
          ) : (
            <PlayCircleFilledWhiteIcon fontSize="large" />
          )}
        </PurpleIconButton>
        <Slider
          size="medium"
          value={audioFileSeconds}
          onChange={handleChange}
          aria-labelledby="audio-slider"
          sx={{ mx: 2, flex: 1, color: "#25004D" }}
        />
        {caseData?.intake_call && (
          <Box
            sx={{
              minWidth: 50,
              textAlign: "right",
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: "700",
              color: "#808080",
            }}
          >
            {formatCallDuration(caseData?.intake_call)}
          </Box>
        )}
      </Box>
    </ClientScreenTile>
  );
};

export default IntakeCallSection;
