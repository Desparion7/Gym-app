import { createSlice } from '@reduxjs/toolkit';


interface userInfoStateType {
	lastUsedTrainingId: string | null;
	lastUsedSetId: string | null;
	lastExercise: {
		exerciseName: string;
		url: string;
		time: boolean;
	};
}

const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState: {
		lastUsedTrainingId: null,
		lastUsedSetId: null,
		lastExercise: {},
	} as userInfoStateType,
	reducers: {
		setlastUsedTrainingId(state, action) {
			const trainingId = action.payload;
			state.lastUsedTrainingId = trainingId;
		},
		// not use yet
		setlastUsedSetId(state, action) {
			const setId = action.payload;
			state.lastUsedSetId = setId;
		},
		setlastExercise(state, action) {
			const lastExercise = action.payload;
			state.lastExercise = lastExercise;
		},
	},
});

export default userInfoSlice.reducer;

export const { setlastUsedTrainingId, setlastUsedSetId, setlastExercise } =
	userInfoSlice.actions;

export const lastUsedTraining = (state: any) =>
	state.userInfo.lastUsedTrainingId;

export const lastUsedSet = (state: any) =>
	state.userInfo.lastUsedSetId;

export const lastUsedExercise = (state: any) => state.userInfo.lastExercise;

