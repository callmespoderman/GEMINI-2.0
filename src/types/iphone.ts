export type IPhoneModel = 'pro' | 'pro-max';

export type IPhoneColor = 'midnight-green' | 'space-gray' | 'silver' | 'gold';

export interface IPhoneColorOption {
  id: IPhoneColor;
  name: string;
  hex: string;
  accentHex: string;
  edgeHex: string;
  description: string;
}

export type StorageCapacity = '64GB' | '256GB' | '512GB';

export type CameraLensId = 'ultra-wide' | 'wide' | 'telephoto';

export interface CameraLens {
  id: CameraLensId;
  name: string;
  focalLength: string;
  aperture: string;
  zoomFactor: string;
  fieldOfView: string;
  description: string;
  sampleImage: string;
}

export interface SpecCategory {
  title: string;
  items: { label: string; value: string }[];
}
