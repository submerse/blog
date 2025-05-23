let mediaRecorder;
let audioChunks = [];

const recordButton = document.getElementById('record');
const stopButton = document.getElementById('stop');
const playButton = document.getElementById('play-reversed');

recordButton.onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  audioChunks = [];

  mediaRecorder.ondataavailable = event => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = async () => {
    const blob = new Blob(audioChunks);
    const arrayBuffer = await blob.arrayBuffer();
    const audioCtx = new AudioContext();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    // Reverse the buffer
    for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
      Array.prototype.reverse.call(audioBuffer.getChannelData(i));
    }

    // Save reversed buffer for playback
    playButton.onclick = () => {
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.start();
    };

    playButton.disabled = false;
  };

  mediaRecorder.start();
  recordButton.disabled = true;
  stopButton.disabled = false;
};

stopButton.onclick = () => {
  mediaRecorder.stop();
  stopButton.disabled = true;
  recordButton.disabled = false;
};
