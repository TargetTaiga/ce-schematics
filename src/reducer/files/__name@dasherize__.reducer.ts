import { HttpErrorResponse } from '@angular/common/http';
import { ActionPayload } from 'src/app/modules/shared/entities/action-payload';

export interface I<%= classify(name) %>State {
}

const <%= camelize(name) %>InitialState: I<%= classify(name) %>State = {
};

type <%= classify(name) %>ActionPayloadType = HttpErrorResponse;

export function <%= camelize(name) %>Reducer(state: I<%= classify(name) %>State = <%= camelize(name) %>InitialState, action: ActionPayload<<%= classify(name) %>ActionPayloadType>): I<%= classify(name) %>State {
	switch (action.type) {
		default:
			return state;
	}
}
