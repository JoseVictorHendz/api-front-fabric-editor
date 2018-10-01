import { Injectable, Injector } from '@angular/core';
import { UserService } from './services/user.service';
import { PageService } from './services/page.service';


@Injectable()
export class FacadeService {

  // private _exampleService: ExampleService;
  // private get exampleService(): ExampleService {
  //   if(!this._exampleService){
  //     this._exampleService = this.injector.get(ExampleService);
  //   }
  //   return this._exampleService;
  // }

  // User Service
  private _userService: UserService;
  private get userService(): UserService {
    if (!this._userService) {
      this._userService = this.injector.get(UserService);
    }
    return this._userService;
  }

    // Page Service
    private _pageService: PageService;
    private get pageService(): PageService {
      if (!this._userService) {
        this._pageService = this.injector.get(PageService);
      }
      return this._pageService;
    }

  constructor(private injector: Injector) { }

  // getExamples(){return this.exampleService.get()}
  // getExampleById(id){return this.exampleService.getById(id)}
  // postExample(example){return this.exampleService.post(example)}
  // deleteExample(example){return this.exampleService.delete(example)}

  // User
  getUser() { return this.userService.get(); }
  getUserById(id) { return this.userService.getById(id); }
  postUser(user) { return this.userService.post(user); }
  putUser(user) { return this.userService.put(user); }
  putActiveUser(user) { return this.userService.putActive(user); }
  deleteUser(user) { return this.userService.delete(user); }

    // Page
    getPage() { return this.pageService.get(); }
    getPageById(id) { return this.pageService.getById(id); }
    postPage(page) { return this.pageService.post(page); }
    putPage(page) { return this.pageService.put(page); }
    putActivePage(page) { return this.pageService.putActive(page); }
    deletePage(page) { return this.pageService.delete(page); }
}
