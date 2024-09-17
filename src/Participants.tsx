export interface ParticipantsProps {
  participantA?: string;
  participantB?: string;
}

export const Participants = ({ participantA, participantB}: ParticipantsProps) => {
  return (
    <div className="participants">
      <h2>
        <img src={`${import.meta.env.BASE_URL}assets/logo.svg`} className="logo" alt="FBG" />
        {participantA}
      </h2>
      <div>at <hr /></div>
      <h2>
        <img src={`${import.meta.env.BASE_URL}assets/logo.svg`} className="logo" alt="FBG" />
        {participantB}
      </h2>
    </div>
  );
};
