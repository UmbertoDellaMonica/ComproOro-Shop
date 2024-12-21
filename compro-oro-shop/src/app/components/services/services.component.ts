import { Component, OnInit } from '@angular/core';
import { ComproOroSeparatorComponent } from "../../shared/molecules/compro-oro-separator/compro-oro-separator.component";
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComproOroCallButtonComponent } from "../../shared/molecules/compro-oro-call-button/compro-oro-call-button.component";


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ComproOroSeparatorComponent, ComproOroCallButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{


  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}

